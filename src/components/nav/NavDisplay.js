import React from 'react';

export const NavDisplay = () => {

    return (
        <div className="nav-bar">
            <div className="logo">
                <h1>FixterGeek</h1>
            </div>
            <div className="pestanas">
                <p>Learn Now</p>
                <hr className="divider"/>
                <p>Sign In</p>
            </div>
        </div>
    );
};