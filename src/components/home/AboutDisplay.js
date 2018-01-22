import React from 'react';
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

                <p className="parrafo">
                Nuestro bootcamp busca enseñar a los curiosos por el código los lenguajes de programación más modernos de
                forma profesional. No es una escuela tradicional,
                    es un lugar en donde en comunidad y de la mano de nuestros expertos
                aprenderás las buenas prácticas de la programación.

                </p>


            </div>
        </div>
    );
};