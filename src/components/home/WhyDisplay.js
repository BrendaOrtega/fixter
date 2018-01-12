import React from 'react';
import uno from '../../assets/libreta.png';
import dos from '../../assets/lap.png';
import tres from '../../assets/laptop.png';
import cuatro from '../../assets/com.png';

export const WhyDisplay = () => {

    return (
        <div className="why">
            <h2 className="titulos">We made easy</h2>
            <div className="ask">
                <div className="cuadro ">
                    <h4>Registrate</h4>
                    <p>Crea un perfil de usuario y ten acceso a cursos gratuitos.</p>
                </div>
                <div className="cuadro">

                    <h4>Inscríbete</h4>
                    <p>Asiste a un Bootcamp y aprende nuevas tecnologías en tan solo 8 semanas.</p>
                </div>
                <div className="cuadro">

                    <h4>eLearning</h4>
                    <p>Aprende con libertad, eligiendo la hora y lugar para tu aprendizaje</p>
                </div>
                <div className="cuadro">

                    <h4>Comunidad</h4>
                    <p>Se parte de nuestra comunidad (meetups, conferencias, posadas y mucho código).</p>
                </div>
            </div>
        </div>
    );
};