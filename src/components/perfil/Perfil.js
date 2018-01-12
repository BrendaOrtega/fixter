import React, { Component } from 'react';
import './Perfil.css';
import {Link} from 'react-router-dom';
import camp from '../../assets/bootcamp.png';

class Perfil extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }

    render() {
        return (
            <div className="perfil">
                <div className="profile">
                    <div className="perfil_datos">
                        <div className="data_card">
                            <img  className="photo_user" src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?_nc_eui2=v1%3AAeGInm42bIrRkyQWKrVUu1uyt98Q7XvsZA5gzYjwOadETJfj_bDpFhKPIXUN_8fG4y8s302qs1GRkDTUrhFWV_UOjHJKyXNoKPnx6bdiT0QzLA&oh=8d761055bc8a26078aaf80fe2fe4a4ad&oe=5AEE7FB1" alt=""/>
                            <div className="user_data">
                                <h2>Brendi JS</h2>
                                <p>brendi@js.com</p>

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
    }
}

export default Perfil;