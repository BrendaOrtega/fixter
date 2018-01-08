import React, { Component } from 'react';
import './Bootcamp.css';
import FontAwesome from 'react-fontawesome';
import CardCamp from '../CardCamp/CardCamp';

class Bootcamp extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="bootcamp">
                <div className="camp_present">
                    <img className="rp" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/160/full/EGH_ReactBeginners.png" alt=""/>
                    <h2>Bootcamp</h2>
                    <p>El mejor Bootcamp de código</p>
                </div>
                <div className="flexbox">
                    <div className="box">
                        <h2>Uso de Boot Camp</h2>
                        <p>Boot Camp es un software que viene integrado en la Mac y te permite instalar Microsoft Windows. No es necesario que descargues nada por tu cuenta; simplemente abre el Asistente Boot Camp y este te guiará durante el resto del proceso.
                        </p>
                        <button className="btn_start">Inscribirme</button>
                    </div>
                    <div className="box">
                        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/mac_apps/bootcamp/featured-section-using-bootcamp_2x.jpg" alt=""/>
                    </div>
                </div>
                <div style={{backgroundColor:"#f4f5f9", paddingTop:"50px", paddingBottom:"50px"}}>
                    <CardCamp />
                    <CardCamp />
                </div>
            </div>
        );
    }
}

export default Bootcamp;