import React from 'react';
import logo from '../citi.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Menu() {
    return (
    <div> 
     <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1250px'}}>
                <a href = 'http://localhost:3000/loginCB' className="proButton" >  Log out! </a>
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newFont>My Monthly Expenses</newFont>
          <br></br>     <br></br>    <br></br> 
          <newFont style={{fontSize:'30px'}}>Select Month:</newFont>
          <br /> <br />
     
    
    
<Dropdown options={['July', 'June', 'April', 'March', 'February', 'January']} ></Dropdown><br /> 

<div className="buttonContainer" >
       <a href = 'http://localhost:3000/view-expenses' className="homeButton" style={{width:'350px'}}>  View Expenses! </a>
        &nbsp; &nbsp; &nbsp;

        </div>
        </p>
          </header>
        
       </div>
)}