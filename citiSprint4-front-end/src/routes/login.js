import React from 'react';
import logo from '../citi.png'
import cibc from '../cibc.png'
import rbc from '../rbc.png'
import td from '../td.png'
import scotia from '../scotia.png'
import bmo from '../bmo.jpg'


export default function Login() {
    return (
    <div> 
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
         
          <br></br>    
       
          <newFont style={{"font-size": "35px"}}>Select Sign-in Partner:</newFont><br /><br /> 
</p>
           <a href="http://localhost:3000/menu">
           <div class="row">
  <div class="column">
<img border="0" alt="CIBC" src={cibc} width="100" height="100"/>
</div>
<div class="column">
<img border="0" alt="BMO" src={bmo} width="100" height="100"/>
</div>
<div class="column">
<img border="0" alt="RBC" src={rbc} width="100" height="100" />
</div>
<div class="column">
<img border="0" alt="SCOTIA" src={scotia} width="100" height="100" />
</div>
<div class="column">
<img border="0" alt="TD" src={td} width="100" height="100" />
</div>

</div>

</a>
        </header>
       
        </div>
)}
