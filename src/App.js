import React, { Component } from 'react';
import {Routes} from './routes';
import './App.css';
import Nav from './components/nav/NavContainer';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Nav />
                    <Routes />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;