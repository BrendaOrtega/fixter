import React, { Component } from 'react';
import './PayForm.css';

class PayForm extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    push =()=>{
        alert("Aun no se abre el período de pago")
}

    render() {
        return (
            <div className="pay">

                <div className="card_form">
                    <h2>Bootcamp: Información de Pago</h2>
                    <hr className="division"/>

                    <form method="post" name="sentMessage" action="">
                        <div className="formgroup_cupon">
                            <div className="inp_cupon">
                                <input type="text" name="nombre" className="formcontrol" placeholder="Ingresa el código de descuento" required data-validation-required-message="Ingresa el código"/>
                            </div>
                            <button className="btn_cupon">Aplicar código de descuento</button>
                        </div>
                        <br/>
                        <p className="nombre_input" htmlFor="">Nombre del tarjetahabiente</p>
                        <div className="formgroup_cupon">
                            <div className="inp_pay">
                                <input type="text" name="nombre" className="formcontrol" placeholder="Nombre " required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <br/>
                        <p className="nombre_input" htmlFor="">Número de tarjeta de crédito</p>
                        <div className="formgroup_cupon">
                            <div className="inp_pay">
                                <input type="text" name="numero" className="formcontrol" placeholder="---- ---- ---- ----" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                               </div>
                        </div>

                        <div className="formgroup_cupon">
                            <div style={{flexGrow:"1"}}>
                            <p className="nombre_input" htmlFor="">Fecha de expiración</p>
                                <div className="inp_tarjeta">
                                    <input type="text" name="numero" className="formcontrol" placeholder="MM/AAAA" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                               </div>

                            </div>
                            <div style={{flexGrow:"1"}}>
                                <p className="nombre_input" htmlFor="">Código de seguridad</p>
                                <div className="inp_tarjeta">
                                    <input type="text" name="numero" className="formcontrol" placeholder="CVV" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                </div>

                            </div>


                        </div>
                        <div className="formgroup_cupon">
                            <div style={{flexGrow:"1"}}>
                                <p className="nombre_input" htmlFor="">Número telefónico</p>
                                <div className="inp_tarjeta">
                                    <input type="text" name="numero" className="formcontrol" placeholder="555-555-55-55" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                </div>

                            </div>
                            <div style={{flexGrow:"1"}}>
                                <p className="nombre_input" htmlFor="">Código de seguridad</p>
                                <div className="inp_tarjeta">

                                        <select name="path" type="text" className='select' id="name" required data-validation-required-message="Please enter your name.">
                                            <option  default value="Método">Opciones de pago</option>
                                            <option value="Contado">Contado</option>
                                            <option value="3 meses">3 meses sin intereses</option>
                                            <option value="6 meses">6 meses sin intereses</option>
                                            <option value="12 meses">12 meses sin intereses</option>
                                        </select>

                                </div>

                            </div>


                        </div>
                        <div className="formgroup_cupon" style={{display:"flex"}}>
                            <span><input className="check" type="checkbox" placeholder=""/>Acepto terminos y Condiciones</span>
                        </div>
                        <br/>
                        <button onClick={this.push} className="btn_start">Pagar $6,000.00</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PayForm;