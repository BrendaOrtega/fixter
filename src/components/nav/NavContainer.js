import React, { Component } from 'react';
import {NavDisplay} from './NavDisplay';
import './Nav.css';
import {withRouter} from 'react-router-dom';

class NavContainer extends Component {

    state = {
        top:true,
        isLogged:false
    };
    signOut  = () => {
        localStorage.removeItem("user");
        this.props.history.push("/");

    };
    componentWillMount() {
        const user = localStorage.getItem("user");
        if (user) {
            this.setState({isLogged:true})
        }else{
            this.setState({isLogged:false})
        }
    }

    render() {

        return (
            <div>
                <NavDisplay
                    isLogged={this.state.isLogged}
                    signOut={this.signOut}
                />
            </div>
        );
    }
}

export default withRouter(NavContainer);