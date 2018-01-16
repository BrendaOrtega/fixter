import React from 'react';
import {Link} from 'react-router-dom';
import camp from '../../assets/bootcamp.png';

export const PerfilDisplay = ({photoURL, displayName, email, isLogged}) => {

    return (
        <div className="perfil">
            <div className="profile">
                <div className="perfil_datos">
                    <div className="data_card">
                        <img  className="photo_user" src={photoURL} alt=""/>
                        <div className="user_data">
                            <h2>{displayName}</h2>
                            <p>{email}</p>
                            <hr className="division"/>
                            <p>BrendiJs te uniste a Fixter </p>
                            <p>desde hace 2 anos</p>
                        </div>
                    </div>
                    <div className="data_suscript">
                        <p>Suscripción</p>
                        <hr className="division"/>
                        <div className="pay_box">
                            <p>Bootcamp</p>
                            <Link to="/pay">
                                <button className="btn_pay">Pagar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="perfil_progress">
                    <div>
                        <h2>Bootcamp</h2>
                        <hr className="division"/>
                        <div className="box_courses">
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt=""/>
                                <p>Frontend Path</p>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt=""/>
                                <p>Backend Path</p>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt=""/>
                                <p>Mobile Path</p>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt=""/>
                                <p>FullStack Path</p>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt=""/>
                                <p>Servers Path</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Cursos</h2>
                        <hr className="division"/>
                        <div className="box_courses">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};