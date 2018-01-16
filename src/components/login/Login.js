import React, { Component } from 'react';
import {LoginDisplay} from './LoginDisplay';
import {RegisterDisplay} from './RegisterDisplay';
import './Login.css';
import firebase from '../../firebase';
//redux
import {connect} from 'react-redux';
import {loginAction} from '../../redux/actions/userAction';


const codigos = {
        "auth/wrong-password":"Tu password está mal"
};

class Login extends Component {
    state= {
        mostrar:false,
        login:{
            email: null,
            password: null
        },
        error: null,
        registro: false,
        nuevoRegistro: {
            email:null,
            pass:null,
            pass2:null
        }

    };

    // componentWillMount(){
    //     const user = localStorage.getItem("user");
    //     if(user){
    //         this.props.history.push("/perfil");
    //     }
    // };

    toggleMostrar = () => {
        this.setState({mostrar:!this.state.mostrar});
    };

    saveInput = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const login = this.state.login;
        login[input] = value;
        this.setState({login});
        // console.log(login);
    };
    saveRegistro = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const nuevoRegistro = this.state.nuevoRegistro;
        nuevoRegistro[input] = value;
        this.setState({nuevoRegistro});
        // console.log(login);
        if(nuevoRegistro.pass !== nuevoRegistro.pass2)
            this.setState({error:"tu contrasena no coincide"});
        else
            this.setState({error:null});
    };

    onLogin = (e) => {
        e.preventDefault();
        const {login} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(login.email, login.password)
            .then(usuario=>{
                let user = JSON.stringify(usuario);
                localStorage.setItem("user", user);
                this.props.loginAction(user);
                this.props.history.push("/perfil");
            })
            .catch(e=>{
                console.log(e);
                alert(codigos[e.code]);
            });

    };
    loginGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().getRedirectResult().then(result=> {
            console.log(result.user)
            localStorage.setItem("user",JSON.stringify(result.user));
            this.props.loginAction(result.user);
            this.props.history.push("/perfil");

        }).catch(function(error) {

        });
    };
    loginFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithRedirect(provider).then(result=> {
            console.log(result.user);
            localStorage.setItem("user",JSON.stringify(result.user));
            this.props.loginAction(result.user);
            this.props.history.push("/perfil");
        }).catch(function(error) {
            console.log(error)
        });
    }

    changeRegistro = () => {
        this.setState({registro:true});
    };

    createUser = (e) => {
        e.preventDefault();
        const {nuevoRegistro} = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(nuevoRegistro.email, nuevoRegistro.pass)
            .then(s=>{
                this.setState({registro:false});
            })
            .catch(e=>console.log(e));
    };
    render() {
        const {registro, nuevoRegistro} = this.state;
        return (
            <div>
                {registro ?
                    <RegisterDisplay
                        toggleMostrar = {this.toggleMostrar}
                        mostrar={this.state.mostrar}
                        saveRegistro = {this.saveRegistro}
                        error = {this.state.error}
                        onSubmit = {this.createUser}
                        {...nuevoRegistro}
                    />
                    :
                    <LoginDisplay
                        loginFacebook={this.loginFacebook}
                        loginGoogle={this.loginGoogle}
                        changeRegistro={this.changeRegistro}
                        mostrar={this.state.mostrar}
                        toggleMostrar = {this.toggleMostrar}
                        saveEmail = {this.saveEmail}
                        savePass = {this.savePass}
                        saveInput = {this.saveInput}
                        onSubmit = {this.onLogin}
                        error = {this.state.error}
                    />

                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    console.log(state);
    return {
        user:state.user.userObject
    }
}

export default Login = connect(mapStateToProps, {loginAction})(Login);