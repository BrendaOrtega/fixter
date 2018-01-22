import React, { Component } from 'react';
import './Nosotros.css';
import {TeamDisplay} from './TeamDisplay';
import geek from '../../assets/geek_2.png';

class Nosotros extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="nosotros">

                <div className="present">
                    <img src={geek} alt=""/>
                    <h2>Sobre FixterGeek...</h2>
                    <p>En FixterGeek comprendemos la importancia de la tecnología en las decadas por venir,
            entendemos las necesidades de las nuevas empresas y startups que estan surgiendo y las que vendrán,
            la economía global se está moviendo en torno al software y la tecnología, estamos viviendo una era en la
        que las más grandes oportunidades son a base de conocimientos y habilidades.

            <br />
            Es por ello que en FixterGeek buscamos empoderar a nuestros jovenes para que apreovechen esta
        ventana de oportunidad y obtengan los mejores empleos alrededor del mundo, se conviertan en el
        aliado correcto de cualquier emprendimiento tecnológico o incluso emprender con bases tecnológicas
        fuertes. No sómos la única opción, al rededor del mundo existen bootcamps y programas orientados a
        suplir la falta de desarrolladores y creadores de tecnología que existen a nivel mundial, pero el
        acceso a todas estas opciones estan muy por encima de de la economía promedio de un estudiante latino,
            los precios son excesivos y hasta inalcanzables. Es por ello que nosotros buscamos acortar esta
        brecha económica acercando las herramientas más demandadas por el mercado mundial con las mejores
        prácticas y con una metodología probada de enseñanza hasta ti. Tu puedes comenzar tu carrera
        profesional con aspiraciones internacionales sin costos enormes de la escuela tradicional o bootcamps costosos.
            <br/>
¿Quieres formar parte de FixterGeek?
                   </p>
                </div>
                <TeamDisplay />

            </div>
        );
    }
}

export default Nosotros;