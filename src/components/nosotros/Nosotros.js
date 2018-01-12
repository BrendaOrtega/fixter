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
                    <p>El FixterCamp es un bootcamp que busca enseñar a los curiosos
                        por el código los lenguajes de programación más modernos de
                        forma profesional y divertida. No es una escuela tradicional,
                        es un lugar en donde en comunidad y de la mano de nuestros expertos
                        aprenderás las buenas prácticas de la programación.
                        El FixterCamp es un bootcamp que busca enseñar a los curiosos
                        por el código los lenguajes de programación más modernos de
                        forma profesional y divertida. No es una escuela tradicional,
                        es un lugar en donde en comunidad y de la mano de nuestros expertos
                        aprenderás las buenas prácticas de la programación.
                    </p>
                    <p>El FixterCamp es un bootcamp que busca enseñar a los curiosos
                        por el código los lenguajes de programación más modernos de
                        forma profesional y divertida. No es una escuela tradicional,
                        es un lugar en donde en comunidad y de la mano de nuestros expertos
                        aprenderás las buenas prácticas de la programación.
                        El FixterCamp es un bootcamp que busca enseñar a los curiosos
                        por el código los lenguajes de programación más modernos de
                        forma profesional y divertida. No es una escuela tradicional,
                        es un lugar en donde en comunidad y de la mano de nuestros expertos
                        aprenderás las buenas prácticas de la programación.
                    </p>
                </div>
                <TeamDisplay />

            </div>
        );
    }
}

export default Nosotros;