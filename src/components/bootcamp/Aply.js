import React, { Component } from 'react';
import './Aply.css';
import firebase from '../../firebase';
import {AplyForm} from './AplyForm';


class Aply extends Component {
    state = {
        errors: {},
        newAply:{

        },
        aplys: [

        ],
    };
    componentWillMount() {
        let user = localStorage.getItem("user");
        console.log(user)
        // user = JSON.parse(user);
        if (user) {
            this.setState({isLogged:true, user})
        }else{
            this.setState({isLogged:false})
            this.props.history.push("/login");
        }
    }
    componentDidMount () {
        window.scroll(0, 0)
    }

    onChangeAply = (e) => {
        let newAply = this.state.newAply;
        const field = e.target.name;
        const value = e.target.value;
        newAply[field] = value;
        this.setState({newAply});
        console.log(newAply);
    };

    validateForm = () => {
        let newAply = this.state.newAply;
        console.log(newAply)
        let errors = this.state.errors;
        let isOk = true;
        return isOk;
    };
    onSave = (e) => {
        e.preventDefault()
        if (this.validateForm()) {
            firebase.database().ref("aplys")
                .push(this.state.newAply)
                .then(r => {
                    console.log(r.key)
                    if(this.state.file){
                        let updates = {};
                        firebase.storage()
                            .ref(r.key)
                            .child(this.state.file.name)
                            .put(this.state.file)
                            .then(s=>{
                                const link = s.downloadURL;
                                let newAply = this.state.newAply;
                                newAply["photos"] =[link];
                                updates[`/aplys/${r.key}`] = newAply;
                                firebase.database().ref().update((updates));

                            });
                    }
                    console.log("Si guarde" + r.key)
                    this.props.history.push("/perfil");

                })
                .catch(e=>{
                    console.log("asi no:", e.message);
                });
        } else{
            alert("aun no");
        };

    };

    render() {
        const {aplys, errors} = this.state;
        return (
            <div>
                <AplyForm
                    aplys={aplys}
                    aply={this.state.newAply}
                    onChangeAply={this.onChangeAply}
                    errors={errors}
                    onSave={this.onSave}
                />
            </div>
        );
    }
}

export default Aply;