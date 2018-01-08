import React from 'react';

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
                    <img className="rp" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/160/full/EGH_ReactBeginners.png" alt=""/>
                </div>


           </div>
        </div>
    );
};