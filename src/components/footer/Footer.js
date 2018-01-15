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
                                <Link to="/contacto">
                                    <p>Contacto</p>
                                </Link>
                            </div>
                            <div className="links">
                                <Link to="/bootcamp">
                                    <p>Bootcamp</p>
                                </Link>
                                <Link to="/cursos">
                                    <p>Cursos</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="redes">
                        <h3>Work together</h3>
                        <div className="social">
                            <Link to="https://www.facebook.com/fixterme/" target="blank">
                                <FontAwesome name="facebook-square" size="2x"/>
                            </Link>
                            <Link to="https://twitter.com/FixTeR_" target="blank">
                                <FontAwesome name="twitter-square" size="2x"/>
                            </Link>
                            <Link to="https://www.instagram.com/fixtergeek/?hl=es-la" target="blank">
                                <FontAwesome name="instagram" size="2x"/>
                            </Link>
                        </div>
                        <br/>
                        <span>
                                <Link to="/politicas-de-privacidad">
                                    <span>Politicas de Privacidad</span>
                                </Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;