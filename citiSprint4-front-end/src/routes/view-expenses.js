import React from 'react';
import logo from '../citi.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Table} from 'react-bootstrap';
import happyFace from '../happyFace.png'
import sadFace from '../sadFace.png'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function View() {
    return (
    <div> 
     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>
      
          <newFont>Summary for July</newFont>
          <br></br>     <br></br>    <br></br> 
</p>

<div
        className="ag-theme-alpine"
        style={{
        height: '450px',
        width: '600px', 
        }}
      >
        <AgGridReact
          columnDefs={[{
            headerName: "Point", field: "point"
          }, {
            headerName: "Price", field: "price"
          }, {
            headerName: "Opinion", field: "feel"
          }]}
          rowData={[{
            point: "Walmart", price: "$71.20", feel: `Well Spent`
          }, {
            point: "Amazon", price: "$33.75", feel: 'Could have avoided'
          }, {
            point: "Best Buy", price: "$44.32", feel: 'Well Spent'
          },{
          point: "Tim Horton's", price: "$12.30", feel: 'Well Spent'
          },
            {
            point: "ABC Steak House", price: "$49.39", feel: 'Well Spent'
          },
            {
              point: "Amazon", price: "$112.40", feel: 'Could have avoided'
          },
              {
                point: "Cinema XY", price: "$34.29", feel: 'Could have avoided'
          }]}>
        </AgGridReact>
        <div className="buttonContainer" >
        <a href = 'http://localhost:3000/edit-expenses' className="proButton"style={{width:'350px'}} >  Edit Expenses! </a>
        </div>
        </div>
    
          {/* <Table striped bordered hover style={{backgroundColor:'white'}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Point </th>
      <th>CAD</th>
      <th >Feeling </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Walmart</td>
      <td>$41</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Amazon</td>
      <td>$79</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>3</td>
      <td >Tim Horton's</td>
      <td>$8</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>4</td>
      <td >Amazon</td>
      <td>$91</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>5</td>
      <td >McDonalds</td>
      <td>$17</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>6</td>
      <td >Netflix</td>
      <td>$15</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>7</td>
      <td >Best Buy</td>
      <td>$140</td>
      <td><img src={sadFace} height='50px' width='50px'></img></td>
    </tr>
    <tr>
      <td>8</td>
      <td >Star Bucks</td>
      <td>$8</td>
      <td><img src={happyFace} height='50px' width='50px'></img></td>
    </tr>
  </tbody>
</Table> */}
         
     
    
    
     
        <br /> <br />
<br /><br /> 

          </header>
       
       </div>
)}