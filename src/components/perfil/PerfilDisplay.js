 import React from 'react';
import {Link} from 'react-router-dom';
import camp from '../../assets/bootcamp.png';
import user from '../../assets/user.png';

export const PerfilDisplay = ({photoURL, displayName, email, isLogged}) => {

    return (
        <div className="perfil">
            <div className="profile">
                <div className="perfil_datos">
                    <div className="data_card">
                        <img  className="photo_user" src={photoURL ? photoURL : user} alt="user"/>
                        <div className="user_data">
                            <h2>{displayName}</h2>
                            <p>{email}</p>
                            <hr className="division"/>
                            <p>{displayName ? displayName : email} te uniste a Fixter </p>
                            <p>recientemente</p>
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
                        <div style={{display:"flex"}}>
                        <h2>Bootcamp</h2>
                        <Link to="/aply">
                            <button style={{marginTop:"20px", marginLeft:"10px"}} className="btn_pay">Aplicar</button>
                        </Link></div>
                        <hr className="division"/>
                        <div className="box_courses">
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Intro al código</p>

                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Frontend Path</p>

                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Backend Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Mobile Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>FullStack Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Servers Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
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