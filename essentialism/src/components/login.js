import React from 'react';
//import Loader from 'react-loader-spinner';
//import { connect } from 'react-redux';
import '../App.css'
import Register from './nextarrow1.png'
import axios from 'axios'
//import { login } from '../actions';

/*class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };*/

  const API = 'https://lambda-essentialism-backend.herokuapp.com';

const reqData = {
  username: 'admin',
  password: 'password',
  grant_type: 'password'
};

const queryString = Object.keys(reqData)
  .map(key => key + '=' + reqData[key])
  .join('&');

const headers = {
  url: `${API}/oauth/token`,
  method: 'post',
  withCredentials: true,
  auth: { username: 'lambda-client', password: 'lambda-secret' },
  data: queryString
};

  class Login extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username : '',
        password: ''
      };
    }

  /*handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/values'));
  };*/

  

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    /*fetch('https://lambda-essentialism-backend.herokuapp.com/api/oauth/token', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })*/
    axios
  .request(headers)
  .then(res => res.data.access_token)
  .then(token =>
    axios.get(`${API}/api/thisuser`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  )
   /* .then(res => {
      if (res.status === 200) {
        this.props.history.push('/values');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })*/
    .then(res => console.log(res.data))
    /*.catch(err => {
      console.error(err);
      alert('Error logging in please try again');*/
      .catch(err => console.log(err));
    //});
  }
 
  
  



  render() {
    return (
      <div className="login-form">
        <h1 className='welcome-back'>Welcome Back!</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <label for="username"></label>
         <div className='login-input1'> <input className='login-input'
            type="text"
            name="username"
            placeholder="Username"
            value=/*{this.state.credentials.username}*/{this.state.username}
            onChange={this.handleChange}
          />
          <label for="password"></label>
          <input className='login-input'
            type="password"
            name="password"
            placeholder="••••••••"
            value=/*{this.state.credentials.password}*/{this.state.password}
            onChange={this.handleChange}
          /></div>
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

        
          <img alt ='arrow' src={Register} onClick={this.onSubmit} className='regarrow2'></img>
        </form>
      </div>
    );
  }
}

/*const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);*/

export default Login;


/*<button>
{this.props.loggingIn ? (
  <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
) : (
  'Login'
)}
</button>*/
