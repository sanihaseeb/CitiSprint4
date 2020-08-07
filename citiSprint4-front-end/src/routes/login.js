import React from 'react';
import logo from '../citi.png'
import cibc from '../cibc.png'
import rbc from '../rbc.png'
import td from '../td.png'
import scotia from '../scotia.png'
import bmo from '../bmo.jpg'
import Card from "react-bootstrap/Card";


export default function Login() {
    return (
    <div> 
       <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1760px'}}>
                <a href = 'http://localhost:3000/' className="proButton" > Back </a>
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
 
         
          <br></br>
       
          <br></br>   
       
          <newFont style={{"font-size": "35px"}}>Select Sign-in Partner:</newFont><br /><br /> 

<div class="row">
  <div class="column">

<div className="card">
<a href="http://localhost:3000/menu">
  <img src={rbc} style={{"width": "100px", "height":"100px"}} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title">RBC</h5>

  </div>
 </a>
</div>




<div className="card" >
<a href="http://localhost:3000/menu">
<img src={cibc} style={{"width": "100px", "height":"100px"}} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title">CIBC</h5>
  </div>
  </a>
</div>
</div>

<div class="column">
<div className="card">
<a href="http://localhost:3000/menu">
  <img src={bmo} style={{"width": "100px", "height":"100px"}} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title">BMO</h5>
   
  </div>
  </a>
</div>



<div className="card" >
<a href="http://localhost:3000/menu">
<img src={scotia} style={{"width": "100px", "height":"100px"}} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title">Scotiabank</h5>
  </div>
  </a>
</div>

</div>



</div>

     
</header>    
  </div>
)}
