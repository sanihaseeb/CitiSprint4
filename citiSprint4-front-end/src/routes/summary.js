import React from 'react';
import logo from '../citi.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Summary() {
    return (
    <div> 
        <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1250px'}}>
                <a href = 'http://localhost:3000/login' className="proButton" >  Log out! </a>
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newFont>How good were you last month?</newFont>
          <br></br>     <br></br>    <br></br> 

          
<div className="buttonContainer" >
       <a href = 'http://localhost:3000/viewExpenses' className="homeButton" style={{width:'350px'}}>  Back to Expenses! </a>


      
     
        </div>
        </p>
          </header>
        
       </div>
)}