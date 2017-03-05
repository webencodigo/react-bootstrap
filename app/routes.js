import React from 'react';
import { Route } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';


 
export default (
    
    <Route path="/home" component={Home}>
        <Route path="/quienes-somos" component={QuienesSomos} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/contacto" component={Contacto} />
    </Route>
    
    );
  




