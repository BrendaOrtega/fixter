import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="line ">
                    <div className="footer_data">
                        <h3>Sobre FixterGeek</h3>
                        <div className="fl">
                            <div>
                                <Link to="/nosotros">
                                    <p>Nosotros</p>
                                </Link>
                                <Link to="/nosotros">
                                    <p>Team</p>
                                </Link>
                                <p>Contacto</p>
                            </div>
                            <div className="links">
                                <Link to="/bootcamp">
                                    <p>Bootcamp</p>
                                </Link>
                                <p>Cursos</p>
                            </div>
                        </div>
                    </div>
                    <div className="redes">
                        <h3>Work together</h3>
                        <div className="social">
                            <FontAwesome name="facebook-square" size="2x"/>
                            <FontAwesome name="twitter-square" size="2x"/>
                            <FontAwesome name="instagram" size="2x"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;