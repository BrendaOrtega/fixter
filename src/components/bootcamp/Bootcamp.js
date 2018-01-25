import React, { Component } from 'react';
import './Bootcamp.css';
import {Link} from 'react-router-dom';
import {CardCampDisplay} from '../CardCamp/CardCampDisplay';
import bootcamp from '../../assets/bootc.png';
import laptop from '../../assets/laptop-camp.png';
import temario_front from '../../assets/temarios/Front_Temario.pdf';
import temario_back from '../../assets/temarios/Backend_Temario.pdf';
import temario_intro from '../../assets/temarios/Intro_Temario.pdf';
import temario_full from '../../assets/temarios/FullStack_Temario.pdf';


class Bootcamp extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="bootcamp">
                <div className="camp_present">
                    <img src={bootcamp} alt=""/>
                    <h2>Fixter Camp</h2>
                    <p>El Bootcamp de código</p>
                </div>
                <div className="flexbox">
                    <div className="box">
                        <h2>FixterCamp</h2>
                        <p>Es el Bootcamp de código en donde puedes convertirte en desarrollador profesional en tan solo 8 semanas. Aprende diseno Foront-end, Back-end, desarrollo de Aplicaciones Móviles y Videojuegos,
                            con herramientas pros como Angular, React, Django, NodeJs, Mongo DB, Firebase y más.
                        </p>
                        <Link to="/aply">
                            <button className="btn_start">Inscribirme</button>
                        </Link>
                    </div>
                    <div className="box">
                        <img src={laptop} alt=""/>
                    </div>
                </div>
                <div style={{backgroundColor:"#f4f5f9", paddingTop:"50px", paddingBottom:"50px"}}>
                    <CardCampDisplay
                        nombre={"FullStack Path"}
                        descript="Conviertete en desarrollador full-stack en 11 semanas. Aprende a desarrollar aplicaciones web utilizando ReactJs (la librería de Facebook), construye y estructura el
                        backend con NodeJs y MongoDB, y crea tu propia API. "
                        imagen="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
                        fecha={"27 de Febrero"}
                        dia={"Todos los días"}
                        horario={"4:00 pm a 6:30 pm"}
                        precio={"6,000.00"}
                        temario={temario_full}
                    />
                    <CardCampDisplay
                        nombre={"Intro al Código"}
                        descript="Si nunca has programado, este curso es para ti! Aprenderás a programar desde cero,
                        dominando HTML, CSS y algoritmia. Entenderás la lógica del código de manera sencilla y profesional. "
                        imagen="https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
                        fecha={"25 de Febrero"}
                        precio={"6,000.00"}
                        dia={"Todos los sábados"}
                        horario={"9:00 am a 3:00 pm"}
                        temario={temario_intro}
                    />
                    <CardCampDisplay
                        nombre={"Frontend Path"}
                        descript="Aprende las bases de la programación, crea una interfaz
                         atractiva para los usuarios con HTML, CSS y Javascript. Además, crea una aplicacion web
                        utilizando ReactJs (la librería de Facebook), utilizando bases de datos no relacionales con Firebase
                        y NodeJs."
                        imagen="https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
                        fecha={"19 de Mayo"}
                        precio={"6,000.00"}
                        dia={"Todos los sábados"}
                        horario={"9:00 am a 3:00 pm"}
                        temario={temario_front}

                    />


                    <CardCampDisplay
                        nombre={"Mobile Path"}
                        descript="Crea tu primera app en Android, el sistema operativo móvil más usado en el mundo. En este curso disenaras tu propia aplicación
                        al estilo Material Design, y la concectarás con un servicio web incorporando Firebase. Aprenderás todo lo necesario para llevar tu aplicación a
                        producción de forma optima."
                        imagen="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
                        fecha={"19 de Mayo"}
                        dia={"Todos los sábados"}
                        horario={"9 am a 3:00 pm"}
                        precio={"6,000.00"}

                    />

                    <CardCampDisplay
                        nombre={"Frontend Path"}
                        descript="Aprende las bases de la programación, crea una interfaz
                         atractiva para los usuarios con HTML, CSS y Javascript. Además, crea una aplicacion web
                        utilizando AngularJs (el framework de Google), utilizando bases de datos no relacionales con Firebase
                        y NodeJs."
                        imagen="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
                        fecha={"8 de Septiembre"}
                        precio={"6,000.00"}
                        dia={"Todos los sábados"}
                        horario={"9:00 am a 3:00 pm"}
                        temario={temario_front}

                    />
                    <CardCampDisplay
                        nombre={"Backend Path"}
                        descript="Aprendrás a programar en Python, uno de los lenguajes más utilizados tanto para desarrollo web como para machine learning.
                        Y con Django como framework, crearás aplicaciones web de forma ágil, utilizarás bases de datos como PostgreSQL y SQLite, y hostearás tu app en
                        Heroku y AWS."
                        imagen="https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
                        fecha={"8 de Septiembre"}
                        precio={"6,000.00"}
                        dia={"Todos los sábados"}
                        horario={"9:00 am a 3:00 pm"}
                        temario={temario_back}
                    />
                </div>
            </div>
        );
    }
}

export default Bootcamp;
