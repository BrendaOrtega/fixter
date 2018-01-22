import React from 'react';
import explorar from '../../assets/explorar.png';
import aprende from '../../assets/aprende.png';
import practica from '../../assets/practicaa.png';

export const ProcessDisplay = () => {

    return (
        <div className="process">
            <h2 className="subtitulo">¿How?</h2>
            <div className="step_box">
                <div className="fl">
                    <div className="step">
                        <div className="step_text">
                            <h3>Explora</h3>
                        <p>Explora los diferentes Paths  que te ayudarán a convertirté en un profesional del desarrollo de
                            software. Ya sea siendo parte de un Bootcamp o completando los batches de los cursos online.</p>
                        </div>
                    </div>
                    <div className="step_img">
                        <img src={explorar} alt="explora"/>
                    </div>
                </div>
                <div className="fl">

                    <div className="step_img_dos">
                        <img src={aprende} alt="aprende"/>
                    </div>
                    <div className="step_dos">
                        <div className="step_text_dos">
                    <h3>Aprende</h3>
                    <p>¿Listo para empezar? Elige un Path, y comienza a aprender los
                        lenguajes de programación más utilizados en la indsutria del software. Somos
                        una comunidad amante del código, así que continuamente estaremos estrenando cursos para
                        que aprendas día a día.
                     </p></div>

                </div>
                </div>
                <div className="fl">
                    <div className="step">
                        <div className="step_text">

                        <h3>Práctica</h3>
                        <p>Completa los proyectos después de cada curso poniendo en práctica las herramientas
                            que acabas de aprender. Si tienes alguna duda, nuestro equipo estará siempre apoyandote.</p>
                        </div>
                    </div>
                    <div className="step_img">
                        <img src={practica} alt="practica"/>
                    </div>
                </div>
            </div>
        </div>
    );
};