import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export const CardCampDisplay = () => {

    return (
        <div className="card">
            <div className="card_info">
                <h2 className="name">Web Development Immersive</h2>
                <p>The only thing standing between you and a
                    rewarding career as a web developer? Nine weeks
                    with us. The only thing standing between you and a
                    rewarding career as a web developer? Nine weeks
                    with us. Ahora si.</p>
                <div className="box_btn">
                    <button className="btn_camp">Descargar Temario</button>
                    <Link to="/aply">
                        <button style={{marginLeft:"20px"}} className="btn_camp">Inscribirme</button>
                    </Link>
                </div>
            </div>
            <div className="card_img">
                    <div className="etiqueta">
                        <div className="etq">
                            <FontAwesome name="clock-o" size="2x"/>
                             <h3>5 de Febrero</h3>
                            <p>Every saturday,<br/> from 9am to 3pm</p>
                        </div>
                        <div className="etq">
                            <FontAwesome name="map-marker" size="2x"/>
                            <h3>CITNOVA</h3>
                            <p>Blvd. Ex-Hacienda de la Concepcion #3</p>
                        </div>
                        <div className="etq">
                            <FontAwesome name="map-marker" size="2x"/>
                            <h3>$6,000.00</h3>
                            <p>Precio Promo</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};