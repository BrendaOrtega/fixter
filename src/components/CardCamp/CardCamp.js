import React, { Component } from 'react';
import './CardCamp.css';
import {Link} from 'react-router-dom';
import {CardCampDisplay} from './CardCampDisplay';

class CardCamp extends Component {
    render() {
        return (
            <div >
                <CardCampDisplay />
            </div>
        );
    }
}

export default CardCamp;