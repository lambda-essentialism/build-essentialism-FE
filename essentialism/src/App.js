import React from 'react';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import './App.css';
import Values from './components/values';
import Login from './components/login';
import PrivateRoute from './components/privateroute'
import ValuesList from './components/valueslist';
import RegisterPage from './components/registration';


function App() {
  return (
    <Router><div className="App">

      <Link to='/'>Login</Link>
      <Link to='/registration'>Sign Up</Link>
      <Link to='/values'>Values</Link>
     
     <Route exact path='/' component={Login}/>
     <Route path='/registration' component={RegisterPage}/>
     
    <PrivateRoute exact path='/values' component={ValuesList}/>
    
      
    </div>
    </Router>
  );
}

export default App;

/*<Route  path='/login' component={Login}></Route>
  <Route  path='/signup' component={Signup}></Route>
  <Link to='/signup'>Sign Up</Link>*/
