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
                    <h3>Brenda Ortega</h3>
                    <p>CEO Fixter</p>
                    <Link to="https://www.facebook.com/brenda.ortega.7121" target="blank">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="https://github.com/BrendaOrtega" target="blank">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
                <div className="esclavo">
                    <div className="img_team bliss">
                    </div>
                    <h3>Héctor Bliss</h3>
                    <p>CTO Fixter</p>
                    <Link to="https://www.facebook.com/hector.bliss" target="blank">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="https://github.com/HectorBlisS" target="blank">
                        <FontAwesome name="github"/>
                    </Link>

                </div>
                <div className="esclavo">
                    <div className="img_team oswaldo">
                    </div>
                    <h3>Oswaldo Martínez</h3>
                    <p>FullStack Developer</p>
                    <Link to="https://www.facebook.com/oswwaldom" target="blank">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="https://github.com/Oswaldinho24k" target="blank">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
                <div className="esclavo">
                    <div className="img_team jlo">
                    </div>
                    <h3>Jose Luis Amador</h3>
                    <p>Mobile Developer</p>
                    <Link to="https://www.facebook.com/asjosel" target="blank">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="https://github.com/JoseLAmador" target="blank">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
                <div className="esclavo">
                    <div className="img_team dylan">
                    </div>
                    <h3>Dylan Torres</h3>
                    <p>Mobile Developer</p>
                    <Link to="https://www.facebook.com/dylan.torres.5" target="blank">
                        <FontAwesome name="facebook"/>
                    </Link>
                    <Link to="https://github.com/FoggyRocket" target="blank">
                        <FontAwesome name="github"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};