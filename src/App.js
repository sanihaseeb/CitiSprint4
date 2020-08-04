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

function App() {
  return (
 
  
    <Router>
  <div className="App">
    <Switch>
    <Route path="/login" component={Login} />
      <Route path="/" component={Welcome} />
      </Switch>
      </div>
  </Router>
    
     
   
  );
     
}

export default App;




