import React, { Component } from 'react';
import {ContactoDisplay} from './ContactoDisplay';

class Contacto extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <ContactoDisplay />
            </div>
        );
    }
}

export default Contacto;