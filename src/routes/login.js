import React from 'react';
import logo from '../citi.png'
import cibc from '../cibc.png'
import rbc from '../rbc.png'
import td from '../td.png'
import scotia from '../scotia.png'


export default function Start() {
    return (
    <div> 
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newFont>Lets get started!</newFont>
          <br></br>     <br></br>    <br></br> 
       
    
          <newFont style={{"font-size": "35px"}}>Email:</newFont><br /><input type='text'placeholder="example@example.com.."></input><br /> <br />
          <newFont style={{"font-size": "35px"}}>Sign-on partners:</newFont><br /><br /> 

           <a href="http://localhost:3000/">
           <div class="row">
  <div class="column">
<img border="0" alt="CIBC" src={cibc} width="100" height="100"/>
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
          <br /> <br />
          <input type='submit' onClick={() => window.location=process.env.PUBLIC_URL + '/'} ></input>
      
<br></br>
<br></br>


        </p>
        </header>
       
        </div>
)}
