import React from 'react';
import logo from '../citi.png'
export default function Welcome() {
  
  return (

    
    <div className="App">
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newFont>Welcome to Citi-Balance!</newFont>
<br></br>
<br></br>
      <newFont2>Use your money the right way.</newFont2> 

        </p>
        <div className="buttonContainer">
       <a href = 'http://localhost:3000/login' className="homeButton" >  Login! </a>
        &nbsp; &nbsp; &nbsp;
        <a href = 'http://localhost:3000/signup' className="proButton" >  Sign up! </a>
        </div>
      </header>
      
    </div>
  );
}
