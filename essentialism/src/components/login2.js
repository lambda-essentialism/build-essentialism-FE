import React from 'react';
//import Loader from 'react-loader-spinner';
//import { connect } from 'react-redux';
import '../App.css';
import Register from './nextarrow1.png';
import axios from 'axios';
//import { login } from '../actions';

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
    super(props);
    this.state = {
      username: '',
      password: '',
      token: ''
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    fetch(`${API}/oauth/token`, {
      body: `grant_type=password&username=${this.state.username}&password=${
        this.state.password
      }`,
      headers: {
        Authorization: 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ token: data.access_token });
        console.log(data);
      })
      .then(() => {
        axios
          .request(headers)
          .then(res => res.data.access_token)
          .then(token =>
            axios.get(`${API}/api/values`, {
              headers: {
                Authorization: 'Bearer ' + this.state.token
              }
            })
          )
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="login-form">
        <h1 className="welcome-back">Welcome Back!</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <label for="username" />
          <div className="login-input1">
            {' '}
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="Username"
              value=/*{this.state.credentials.username}*/ {this.state.username}
              onChange={this.handleChange}
            />
            <label for="password" />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="••••••••"
              value=/*{this.state.credentials.password}*/ {this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <img
            alt="arrow"
            src={Register}
            onClick={this.onSubmit}
            className="regarrow2"
          />
        </form>
      </div>
    );
  }
}

export default Login;
