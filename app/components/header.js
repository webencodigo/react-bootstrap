import React from 'react';
import { Link } from 'react-router';

const Header = () => (
		<nav className="navbar navbar-inverse navbar-fixed-top">
	      <div className="container">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="#">Project name</a>
	        </div>
	        <div id="navbar" className="collapse navbar-collapse">
	          <ul className="nav navbar-nav">
	            <li><Link to='/home' activeStyle={{color:'white'}} >Portada</Link></li>
	            <li><Link to='/quienes-somos' activeStyle={{color:'white'}} >Quienes Somos</Link></li>
	            <li><Link to='/noticias' activeStyle={{color:'white'}} >Noticias</Link></li>
	            <li><Link to='/contacto' activeStyle={{color:'white'}} >Contacto</Link></li>
	          </ul>
	        </div>
	      </div>
	    </nav>
)

export default Header;