import React, { Component } from 'react';
import './Aply.css';
import FontAwesome from 'react-fontawesome';

class Aply extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="aplicacion">

                <div className="card_form">
                    <h2>Inscribete a nuestro Bootcamp ahora</h2>
                    <hr className="division"/>
                    <form method="post" name="sentMessage" action="">
                        <div className="formgroup">
                            <div className="inp">
                                <FontAwesome name="user" />
                                <input type="text" name="nombre" className="formcontrol" placeholder="Nombre" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <div className="formgroup">
                            <div className="inp">
                                <FontAwesome name="envelope" />
                                <input type="email" name="email" className="formcontrol" placeholder="Email"  required data-validation-required-message="Porfavor ingresa tu e-mail"/>
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <div className="formgroup">
                            <div className="inp">
                                <FontAwesome name="user" />
                                <input type="tel" name="tel" className="formcontrol" placeholder="Telefono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico"/>
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <div className="formgroup">
                            <div className='option'>
                                <select name="path" type="text" className='icon' id="name" required data-validation-required-message="Please enter your name.">
                                    <option  default value="Bootcamp">Bootcamp</option>
                                    <optgroup  label='Febrero-Abril'>
                                        <option value="Frontend-Path Febrero">Frontend-Path </option>
                                        <option value="Backend-Path Frebrero">Backend-Path</option>
                                        <option value="Introducción a la programación Febrero">Introducción a la programación </option>
                                    </optgroup>
                                    <optgroup  label='Julio-Agosto'>
                                        <option value="Mobile-Path Julio">Mobile-Path</option>
                                        <option value="Introducción a la programación Julio">Introducción a la programación </option>
                                    </optgroup>
                                    <optgroup  label='Octubre-Diciembre'>
                                        <option value="Frontend-Path Octubre">Frontend-Path </option>
                                        <option value="Backend-Path Octubre">Backend-Path</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <hr className="division"/>
                        <br/>
                        <div className="formgroup">
                            <label htmlFor="">Quieres aplicar para una beca de descuento?</label>
                            <br/>
                            <br/>
                            <div className='option'>
                                <select name="path" type="text" className='icon' id="name" required data-validation-required-message="Please enter your name.">
                                    <option  default value="Beca">Beca</option>
                                        <option value="Si">si </option>
                                        <option value="No">no</option>
                                </select>
                            </div>
                        </div>
                        <div className="formgroup">

                            <div className="inp">
                                <div className="msj">
                                    <FontAwesome name="commenting" /></div>

                                <textarea type="text" name="msj" className="formcontrol" placeholder="Porque deberías obtenerla? Escribe un breve mensaje"/>
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <br/>
                        <button className="btn_start">Enviar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Aply;