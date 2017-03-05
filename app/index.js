import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import App from './pages/App';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';

//import routes from './routes';
import reducer from './reducers';




const store = createStore(reducer);



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}  >
    	<Route path="/" component={App} >
	    	<Route path="/home" component={Home} />
	        <Route path="/quienes-somos" component={QuienesSomos} />
	        <Route path="/noticias" component={Noticias} />
	        <Route path="/contacto" component={Contacto} />
        </Route>
    </Router>    
  </Provider>,
  document.getElementById('app')
)
