import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './CardCamp.css';



export const CardCampDisplay = ({nombre, descript, imagen, fecha, precio, temario}) => {

    return (
        <div className="card">
            <div className="card_info">
                <div style={{minHeight:"65%"}}>
                <h2 className="name">{nombre}</h2>
                <p>{descript}</p>
                </div>
                <div className="box_btn">
                    <a href={temario} target="_blank">

                    <button className="btn_camp "><FontAwesome name="download" /> Temario</button>
                    </a>
                    <Link to="/aply">
                        <button style={{marginLeft:"20px"}} className="btn_camp">Inscribirme</button>
                    </Link>
                </div>
            </div>
            <div className="card_img" style={{backgroundImage:`url("${imagen}")`}}>
                    <div className="etiqueta">
                        <div className="etq">
                            <FontAwesome name="clock-o" size="2x"/>
                             <h3>{fecha}</h3>
                            <p>Cada sábado<br/> de 9am a 3pm</p>
                        </div>
                        <div className="etq">
                            <FontAwesome name="map-marker" size="2x"/>
                            <h3>CITNOVA</h3>
                            <p>Blvd. Ex-Hacienda de la Concepcion #3</p>
                        </div>
                        <div className="etq">
                            <FontAwesome name="check-square-o" size="2x"/>
                            <h3>{precio}</h3>
                            <p>Precio Promo</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};