import React from 'react';
import logo from '../citi.png'
import 'react-dropdown/style.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function ViewExp() {
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
              ,
              {
                point: "Starbucks", price: "$12.00", feel: 'Could have avoided'
          }]}>
        </AgGridReact>
        <br />
        <div className="buttonContainer" >
        <a href = 'http://localhost:3000/add-expense' className="homeButton"style={{width:'350px'}} >  Add Expenses </a>
        </div>
        </div>
    
      
  
        <br /> <br />
<br /><br /> 

          </header>
       
       </div>
)}