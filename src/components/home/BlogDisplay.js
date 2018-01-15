import React from 'react';
// import blog_uno from '../../assets/celery.png';
import {Link} from 'react-router-dom';
export const BlogDisplay = () => {


    return (
        <div className="blog">
            <h2>Blog</h2>
            <div id="box_flex">
                <div className="uno">
                    <div className="nota_uno blog_uno">
                        <Link to="http://blog.fixter.org/hospedando-django-celery-rabbitmq-en-aws-parte-1/" target="blank">
                            <div className="etiq">
                                <p>Hospedaje Django + Celery + RabbitMQ en AWS</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nota_uno blog_dos">
                        <Link to="http://blog.fixter.org/framer-diseno-codigo-y-colaboracion/" target="blank">

                            <div className="etiq">
                                <p>Framer - Diseño, código y coloaboración</p>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="dos">
                    <div className="nota_dos blog_tres">
                        <Link to="http://blog.fixter.org/crea-tu-primer-chat-en-tiempo-real-con-firebase/" target="blank">
                            <div className="etiq">
                                <p>¡Crea tu primer chat en tiempo real con Firebase!</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="uno">
                    <div className="nota_uno blog_cuatro">
                        <Link to="http://blog.fixter.org/sube-tu-projecto-django-a-heroku-en-7-pasos/" target="blank">
                            <div className="etiq">
                                <p>Sube tu projecto Django a Heroku en 7 pasos</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nota_uno blog_cinco">
                        <Link to="http://blog.fixter.org/utilizando-firebase-database-con-react-native/" target="blank">
                            <div className="etiq">
                                <p>Utilizando Firebase Database con React Native</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="dos">
                    <div className="nota_dos blog_seis">
                        <Link to="http://blog.fixter.org/retrofit-el-mejor-cliente-rest/" target="blank">
                            <div className="etiq">
                                <p>Retrofit el mejor cliente REST para Android ^_^</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <br/>
                <div className="tres">
                    <div className="nota_tres blog_siete">
                        <Link to="http://blog.fixter.org/comenzando-con-react-native-en-solo-3-pasos/" target="blank">
                            <div className="etiq">
                                <p>Comenzando con React Native en solo 3 pasos</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};