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
                <p className="parrafo">Is a group of working web development professionals
                    and open source contributors that provide you with concise,
                    information dense video courses on the best tools in the industry.</p>

            </div>
        </div>
    );
};