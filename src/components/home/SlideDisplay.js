import React from 'react';
import nerd from '../../assets/nerd_pag.png';

export const SlideDisplay = () => {

    return (
        <div className="slide">
           <div className="cubierta flex">
                <div className="presentation">
                   <h1>Aprende los mejores lenguajes y frameworks de desarrollo </h1>
                   <p>Los mejores Bootcamps y Cursos Online</p>
                    <br/>
                    <button className="btn_start">Empieza a Aprender</button>
               </div>
               <div className="slide_img">
                    <img className="pre" src={nerd} alt=""/>
                </div>
           </div>
        </div>
    );
};