import React, { Component } from 'react';
import './Cursos.css';
import cursos from '../../assets/cursos.png';

class Cursos extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="bootcamp">
                <div className="camp_present">
                    <img src={cursos} alt=""/>
                    <h2>Cursos Online</h2>
                    <p>Próximamente</p>
                </div>
                <div className="flexbox">

                </div>

            </div>
        );
    }
}

export default Cursos;