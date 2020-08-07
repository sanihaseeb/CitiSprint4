import React from 'react';
import logo from '../citi.png'
import 'react-dropdown/style.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import happyFace from '../happyFace.png'
import sadFace from './cryFace.png'
import {Table} from 'react-bootstrap';
export default function ViewExp() {
    return (
    <div> 
       <div className="buttonContainer" style={{width:'150px',paddingTop:'3px', marginLeft:'1760px'}}>
                <a href = 'http://localhost:3000/loginCB' className="proButton" >  Log out! </a>
               
                </div>
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
        <br></br>     
          <newFont>Transactions for July</newFont>
          <br></br>     
     
</p>


       <Table striped bordered hover style={{backgroundColor:'#e6efff'}}>
  <thead>
    <tr>
      <th>Date</th>
      <th>Point </th>
      <th>CAD</th>
      <th >Opinion </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2020/07/01</td>
      <td>Walmart</td>
      <td>$71.20</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/02</td>
      <td>Amazon</td>
      <td>$33.75</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/03</td>
      <td >Best Buy</td>
      <td>$44.32</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/04</td>
      <td >Tim Horton's</td>
      <td>$12.30</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/05</td>
      <td >Steakhouse</td>
      <td>$49.39</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/06</td>
      <td >Amazon</td>
      <td>$112.40</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/07</td>
      <td >Cinema XY</td>
      <td>$34.29</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2020/07/08</td>
      <td >Starbucks</td>
      <td>$12.00</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
  
  </tbody>
</Table>
        <br />
   
      
    
        <div className="buttonContainer">
        <a href = 'http://localhost:3000/add-expense' className="homeButton" style={{width:'350px'}}>  Add Expenses </a>
        &nbsp; &nbsp; &nbsp;
        <a href = 'http://localhost:3000/summary' className="proButton" style={{width:'350px'}}>  View Summary </a>
        &nbsp; &nbsp; &nbsp;
        <a href = 'http://localhost:3000/menu' className="proButton" style={{width:'350px'}}> Back </a>
        </div>

      
  
        <br /> <br />
<br /><br /> 

          </header>
       
       </div>
)}