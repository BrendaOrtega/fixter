import React from 'react';

export const SlideDisplay = () => {

    return (
        <div className="slide">
           <div className="cubierta flex">
                <div className="presentation">
                   <h1>Learn the best development languages from industry pros.</h1>
                   <p>The best Bootcamps and video tutorials</p>
                    <br/>
                    <button className="btn_start">Start to Learning</button>
               </div>
               <div className="slide_img">
                    <img className="rp" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/160/full/EGH_ReactBeginners.png" alt=""/>
                </div>


           </div>
        </div>
    );
};