import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Login.css';

export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error, changeRegistro, loginGoogle, loginFacebook}) => (
    <div className="login">
        <div className="card_login">
            <h3>Iniciar sesión</h3>
            <h1>{error}</h1>
            <div className="redes_login">
                <div className="circle_f" onClick={loginFacebook}>
                    <FontAwesome name="facebook" />
                </div>
                <div className="circle_g" onClick={loginGoogle}>
                    <FontAwesome name="google" />
                </div>
            </div>
            <hr className="line_log"/>
            <div className="log_email">
                <form onSubmit={onSubmit}>
                    <p>Tu email</p>
                    <input className="input" name="email" onChange={saveInput} type="text" placeholder=""/>
                    <br/>
                    <p>Tu contraseña</p>
                    <input className="input" name="password" onChange={saveInput} type="password"/>
                    <p className="ayuda">¿Has olvidado tu contraseña?</p>
                    <button type="submit" className="btn_login">Iniciar sesión</button>
                </form>
            </div>
            <p className="ayuda"><a onClick={changeRegistro} href="#!">Crea una cuenta</a></p>

        </div>
    </div>
);