import React, { Component } from 'react';
import './Perfil.css';
import {PerfilDisplay} from './PerfilDisplay';
import {connect} from 'react-redux';
import {logoutAction} from '../../redux/actions/userAction';


class Perfil extends Component {

    state = {
        isLogged:false,
        user: null
    };

    componentWillMount() {
        let user = localStorage.getItem("user");
        // user = JSON.parse(user);
        if (user) {
            console.log("si")
            this.setState({isLogged:true, user})
        }else{
            this.setState({isLogged:false})
            this.props.history.push("/login");
        }
    }
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <PerfilDisplay
                    isLogged={this.props.isLogged}
                    {...this.props.user}
                />
            </div>
        );
    }
}
function mapStateToProps(state, ownProps){
    console.log(state);
    return {
        user:state.user.userObject,
        isLogged:Object.keys(state.user.userObject).length > 0
    }
}

export default Perfil = connect(mapStateToProps)(Perfil);