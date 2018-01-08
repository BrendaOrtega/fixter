import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export const TeamDisplay = () => {

    return (
        <div className="team">
            <h2>Team</h2>
            <div className="box_esclavos">
                <div className="esclavo">
                    <div className="img_team brendi">
                    </div>
                    <h3>Brendi Js</h3>
                    <p>CEO Fixter</p>
                    <Link to="/">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="/">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
                <div className="esclavo">
                    <div className="img_team bliss">
                    </div>
                    <h3>Brendi Js</h3>
                    <p>CTO Fixter</p>
                    <Link to="/">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="/">
                        <FontAwesome name="github"/>
                    </Link>

                </div>
                <div className="esclavo">
                    <div className="img_team oswaldo">
                    </div>
                    <h3>Brendi Js</h3>
                    <p>FullStack Developer</p>
                    <Link to="/">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="/">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
                <div className="esclavo">
                    <div className="img_team jlo">
                    </div>
                    <h3>Brendi Js</h3>
                    <p>Mobile Developer</p>
                    <Link to="/">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="/">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
                <div className="esclavo">
                    <div className="img_team dylan">
                    </div>
                    <h3>Brendi Js</h3>
                    <p>Mobile Developer</p>
                    <Link to="/">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="/">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};