import React from 'react';
import './Contacto.css';
import FontAwesome from 'react-fontawesome';
import antena from '../../assets/antena.png';

export const ContactoDisplay = ({onSave, errors, onChangeMessage, name, email, tel, msj }) => {

    return (
        <div className="contacto">

            <div className="contacto_img">
                <div  className="cover">
                    <img src={antena} alt=""/>
                    <h2>Contactanos</h2>
                    <p className="pf">Te responderemos lo antes posible</p>
                </div>
            </div>
            <div className="datos_contacto">
                <div className="phone">
                    <FontAwesome name="mobile " size="5x"/>
                    <h4>Teléfono</h4>
                    <p>775 760 9276</p>
                    <p>442 678 7678</p>
                </div>
                <div className="adress">
                    <FontAwesome name="map-marker " size="5x"/>
                    <h4>Dirección</h4>
                    <p>Blvd. Ex-hacienda de la Concepción #3</p>
                    <p>Pachuca de Soto, Hidalgo</p>
                </div>
                <div className="service">
                    <FontAwesome name="clock-o " size="5x"/>
                    <h4>Servcio</h4>
                    <p>Lunes-Viernes</p>
                    <p>11:00 - 19:00</p>
                </div>
            </div>
            <div className="formu">
                <h3>Formulario de Contacto</h3>
                <form onSubmit={onSave}>
                    <input value={name} onChange={onChangeMessage} name="nombre" type="text" placeholder="Nombre" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                    <input value={email} onChange={onChangeMessage} name="email"  type="text" placeholder="E-mail" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
                      <input value={tel} onChange={onChangeMessage} name="tel"  type="text" placeholder="Teléfono" required data-validation-required-message="Porfavor ingresa tu teléfono"/>

                  <textarea value={msj} onChange={onChangeMessage} name="msj" type="text" placeholder="Mensaje" required data-validation-required-message="Ingresa aquí tu mensaje, duda o comentario"/>
                    <button className="btn_start">Enviar</button>
                </form>
            </div>
            <div className="map">
                <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.991073252674!2d-98.80388768510838!3d20.134420023081226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a125b9171db7%3A0xf0ef93b8ffdce18c!2sFixTeR!5e0!3m2!1ses-419!2smx!4v1515716154291" style={{width:"100%",height:"370px", border:0 }}    ></iframe>
            </div>

        </div>

    );
}
