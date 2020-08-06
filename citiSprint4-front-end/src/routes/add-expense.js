import React, {useState} from 'react';
import logo from '../citi.png'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';



export default function AddExp() {

    const options = [
        { label: "Well Spent 😄", value: "ws" },
        { label: "Could have avoided 😢", value: "ca" },
    
      ];

    return (
    <div> 
       <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1250px'}}>
                <a href = 'http://localhost:3000/loginCB' className="proButton" >  Log out! </a>
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <br />
 <br />
    <newFont style={{"font-size": "25px"}}>Point of Transaction:</newFont><br /><input type='text'></input><br /> <br />
    <newFont style={{"font-size": "25px"}}>Amount Spent:</newFont><br /><input type='text'></input><br /> <br />
    <newFont style={{"font-size": "25px"}}>Necessity of Spending:</newFont><br /> 
    <Dropdown options={options}></Dropdown>
    <br /> <br />
    <div className="buttonContainer">
       <a href = 'http://localhost:3000/viewExpenses' className="homeButton"style={{height:'55px', width: '300px',  paddingTop: '10px'}} >  Add </a>
       
        </div>

</header>    
  </div>
)}
