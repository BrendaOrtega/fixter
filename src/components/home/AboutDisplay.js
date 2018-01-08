import React from 'react';
import about from '../../assets/herram-01.png';

export const AboutDisplay = () => {

    return (
        <div className="about flex">
            <div className="logos">
                <img className="rp" src={about} alt=""/>
            </div>
            <div className="about_text">
                <h2 className="titulos">¿Que es FixterGeek?</h2>
                <p className="parrafo">Fixter es</p>
                <p className="parrafo">Is a group of working web development professionals
                    and open source contributors that provide you with concise,
                    information dense video courses on the best tools in the industry.</p>

            </div>
        </div>
    );
};