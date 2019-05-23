import React from 'react';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import './App.css';
//import Values from './components/values';
import Login from './components/login';
import PrivateRoute from './components/privateroute'
import ValuesList from './components/valueslist';
import RegisterPage from './components/registration';
//import Toggle from './components/toggle'
//import Todo from './components/todo'


function App() {
  return (
    <Router><div className="App">

      <header><div className='logo'><div className='esse'><div>ES</div><div>SE</div></div></div>
      <nav><Link className='link' to='//essentialism-jason.netlify.com/#home' >Home</Link>
      <Link className='link' to='//essentialism-jason.netlify.com/#about'>About</Link>
      <Link className='link' to=''>Contact</Link>
      <Link className='link' to='/'>Sign In</Link>
      <Link className='link' to='/registration'>Join</Link></nav></header>
      
     
    <div className='login-page'> <Route exact path='/' component={Login}/></div>
    <div className='registration-page'><Route  path='/registration' component={RegisterPage}/></div> 
     
    <PrivateRoute exact path='/values' component={ValuesList}/>

 

    
      
    </div>
    </Router>
  );
}

export default App;

/*<Route  path='/login' component={Login}></Route>
  <Route  path='/signup' component={Signup}></Route>
  <Link to='/signup'>Sign Up</Link>*/
//<Link to='/values'>Values</Link>