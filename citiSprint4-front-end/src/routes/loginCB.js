import React from 'react';
import logo from '../citi.png'
import Card from "react-bootstrap/Card";


export default function LoginCB() {
    return (
    <div> 
       <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1250px'}}>
                <a href = 'http://localhost:3000/' className="proButton"> Back </a>
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
 
         
          <br></br>
       
          <br></br>   
          <newFont style={{"font-size": "35px"}}>Email:</newFont><br /><input type='text'placeholder="example@example.com.."></input><br /> <br />
          <newFont style={{"font-size": "35px"}}>Password:</newFont><br /><input type='password'placeholder="" size='56'  style={{border: '2px solid red',  padding: '12px 20px'}}></input><br /> <br />

          <div className="buttonContainer" style={{width:'150px',paddingTop:'3px'}}>
          <a href = 'http://localhost:3000/login' className="homeButton"  >  Sign in! </a>
          </div>

     
</header>    
  </div>
)}
