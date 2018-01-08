import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Nosotros from './components/nosotros/Nosotros';
import Bootcamp from './components/bootcamp/Bootcamp';
import Aply from "./components/bootcamp/Aply";
import Login from './components/login/Login';
import Perfil from './components/perfil/Perfil';
import PayForm from './components/payform/PayForm';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/nosotros" component={Nosotros} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/bootcamp" component={Bootcamp} />
        <Route path="/aply" component={Aply} />
        <Route path="/login" component={Login} />
        <Route path="/pay" component={PayForm} />
    </Switch>
);