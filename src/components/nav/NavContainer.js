import React, { Component } from 'react';
import {NavDisplay} from './NavDisplay';
import './Nav.css';
import {withRouter} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
import {logoutAction} from '../../redux/actions/userAction';

class NavContainer extends Component {

    state = {
        isLogged:false,
        user: null
    };
    signOut  = () => {
        localStorage.removeItem("user");
        this.props.logoutAction();
        this.props.history.push("/");

    };
    componentWillMount() {
        let user = localStorage.getItem("user");
        console.log(user)
        // user = JSON.parse(user);


        if (user) {
            this.setState({isLogged:true, user})
        }else{
            this.setState({isLogged:false})
        }
    }

    render() {

        return (
            <div>
                <NavDisplay
                    isLogged={this.props.isLogged}
                    signOut={this.signOut}
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

export default NavContainer = connect(mapStateToProps, {logoutAction})(withRouter(NavContainer));