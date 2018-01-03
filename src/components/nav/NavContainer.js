import React, { Component } from 'react';
import {NavDisplay} from './NavDisplay';
import './Nav.css';

class NavContainer extends Component {
    render() {
        return (
            <div>
                <NavDisplay />
            </div>
        );
    }
}

export default NavContainer;