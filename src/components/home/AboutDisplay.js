import React from 'react';
import react from '../../assets/react.png';
import angular from '../../assets/angular.png';
import css from '../../assets/css3.png';
import ember from '../../assets/ember.png';
import node from '../../assets/node.png';
import python from '../../assets/icono1.png';
import rails from '../../assets/ruby.png';
import django from '../../assets/django.png';
import fire from '../../assets/firepng.png';
import swift from '../../assets/swift.png';
import android from '../../assets/android.png';
import unity from '../../assets/unity.png';
import robot from '../../assets/robotino.png';

export const AboutDisplay = () => {

    return (
        <div className="about flex">
            <div className="logos">
                <div className="logos_img">
                    <img className="robot" src={robot} alt=""/>
                </div>
            </div>
            <div className="about_text">
                <h2 className="titulos">¿Que es FixterGeek?</h2>
                <p className="parrafo">FixterGeek es la plataforma en línea en donde puedes aprender las herramientas para
                    desarrollo de software más utilizadas a nivel mundial, teniendo acceso a cursos y bootcamps
                de alta calidad.
                </p>
                <p className="parrafo">Is a group of working web development professionals
                    and open source contributors that provide you with concise,
                    information dense video courses on the best tools in the industry.</p>

            </div>
        </div>
    );
};