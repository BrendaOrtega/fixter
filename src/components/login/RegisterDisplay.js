import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Login.css';

export const RegisterDisplay = ({mostrar, toggleMostrar, saveRegistro, onSubmit, error, email, pass, pass2}) => (

    <div className="login">
        <div className="card_login">
            <h3>Iniciar sesiÃ³n</h3>
            <h2>{error}</h2>
            <div className="redes_login">
                <div className="circle_f">
                    <FontAwesome name="facebook" size="2x"/>
                </div>
                <div className="circle_g">
                    <FontAwesome name="google" size="2x"/>
                </div>
            </div>
            <hr className="line_log"/>
            <div className="log_email">
                <form onSubmit={onSubmit} >
                    <p>Tu email</p>
                    <input className="input" name="email" type="text" value={email} onChange={saveRegistro} />

                    <p>Tu contrasena</p>
                    <input className="input" name="pass" value={pass} onChange={saveRegistro}  placeholder="Password" type={mostrar ? "text" : "password"}/>

                    <p>Repite tu contrasena</p>
                    <input className="input" name="pass2" placeholder="Repite password" onChange={saveRegistro} value={pass2} type={mostrar ? "text" : "password"} />

                    <span className="tog" htmlFor="">Mostrar <input className="mostrar" onClick={toggleMostrar} type="checkbox" value="Mostrar pass"/>
                            </span>
                    <br/>
                    <br/>
                    <button type="submit" className="btn_login">Crear cuenta</button>
                </form>
            </div>
        </div>
    </div>
);