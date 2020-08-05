import React from 'react';
import logo from '../citi.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Menu() {
    return (
    <div> 
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newFont>My Expenses</newFont>
          <br></br>     <br></br>    <br></br> 
          <newFont style={{fontSize:'30px'}}>Select Month:</newFont>
     
    
    
<Dropdown options={['July', 'June', 'April', 'March', 'February', 'January']} ></Dropdown><br /> <br />
<br /><br /> 
<div className="buttonContainer" >
       <a href = 'http://localhost:3000/view-expenses' className="homeButton" style={{width:'350px'}}>  View Expenses! </a>
        &nbsp; &nbsp; &nbsp;
        <a href = 'http://localhost:3000/edit-expenses' className="proButton"style={{width:'350px'}} >  Edit Expenses! </a>
        </div>
        </p>
          </header>
        
       </div>
)}