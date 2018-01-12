import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/geek_completo.png';


export const NavDisplay = ({isLogged, signOut}) => {

    return (
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">
                    <img className="logo_fix" src={logo} alt=""/>
                </Link>
            </div>
            <div className="pestanas">
                <p>Learn Now</p>
                <hr className="divider"/>

                {!isLogged ?
                    <div className="log">
                    <Link to="/login" >
                        <span >Login</span>
                    </Link></div>: <button onClick={signOut} className="close" >Cerrar sesion</button>}
            </div>
        </div>
    );
};