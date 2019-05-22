import React from 'react';
//import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import '../App.css'
import Register from './nextarrow1.png'

import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
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
  };

  render() {
    return (
      <div className="login-form">
        <h1 className='welcome-back'>Welcome Back!</h1>
        <form className="form" onSubmit={this.login}>
          <label for="username"></label>
         <div className='login-input1'> <input className='login-input'
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label for="password"></label>
          <input className='login-input'
            type="password"
            name="password"
            placeholder="••••••••"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          /></div>
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

        
          <img alt ='arrow' src={Register} onClick={this.login} className='regarrow2'></img>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);


/*<button>
{this.props.loggingIn ? (
  <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
) : (
  'Login'
)}
</button>*/
