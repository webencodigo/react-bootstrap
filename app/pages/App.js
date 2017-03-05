import React from 'react';
import Header from '../components/header';

require( '../main.css' ); 

const App = ({children}) => {

  return (
    <div style={{paddingTop:50}}>
      <Header />
      <div className="container">
      <div className="rojo">
        <div style={{padding: "40px 15px"}}>
        {children}
        </div>
      </div>
      </div>
    </div>
  )
}
  

export default App;
