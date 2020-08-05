import React from 'react';
import logo from './citi.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './routes/login'
import Welcome from './routes/welcome'
import Menu from './routes/menu'
import View from './routes/view-expenses'

function App() {
  return (
 
  
    <Router>
  <div className="App">
    <Switch>
    <Route path="/login" component={Login} />
    <Route path="/menu" component={Menu} />
    <Route path="/view-expenses" component={View}/>
      <Route path="/" component={Welcome} />
      </Switch>
      </div>
  </Router>
    
     
   
  );
     
}

export default App;




