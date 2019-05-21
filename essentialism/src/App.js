import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import Values from './components/values';
import Login from './components/login';


function App() {
  return (
    <Router><div className="App">
     <Login/>
    <Route path='/values' component={Values}/>

      
    </div>
    </Router>
  );
}

export default App;

/*<Route  path='/login' component={Login}></Route>
  <Route  path='/signup' component={Signup}></Route>
  <Link to='/signup'>Sign Up</Link>*/
