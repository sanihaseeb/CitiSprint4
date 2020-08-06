import React from 'react';
import logo from '../citi.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import analysis1 from './analysis1.png';
import analysis2 from './analysis2.png';

export default function Summary() {
    return (
    <div> 
        <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1250px'}}>
                <a href = 'http://localhost:3000/loginCB' className="proButton" >  Log out! </a>
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newFont>How good were you last month?</newFont>
          <br></br>     <br></br>    <br></br> 

          

       <img src = {analysis1} height='300px' width='400px'></img>
       &nbsp; &nbsp; &nbsp;
       <img src = {analysis2} height='300px' width='400px'></img>


      
     
      
        </p>
          </header>
        
       </div>
)}