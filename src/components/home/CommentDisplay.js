import React from 'react';

export const CommentDisplay = () => {

    return (
        <div className="comment">
            <div className="comentario">
                <p><span className="signo">"</span>If you're a developer, you owe it to yourself to follow @eggheadio.
                    Short, instructional videos on the technologies we use.<span className="signo">"</span></p>
                <div className="flex data_comment">
                    <img className="photo_comment" src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/20994218_1381080615320656_7100182021256733168_n.jpg?_nc_eui2=v1%3AAeFcx0MmUSyo_wsQZ_Vov_LLpjmjMUJiWpr1PXWUSMzCmHXB1aOhKWa6qB_Q1GJ2ik1k7fmNwTkXZZNvhSkgMRCajcPNS0vgfhc9y9yMCwSyQg&oh=06a732cbbcf08778c79814dec77ee1b4&oe=5AFAFEE6" alt=""/>
                    <p className="name_comment">Brendi JS</p>
                </div>
            </div>
        </div>
    );
};