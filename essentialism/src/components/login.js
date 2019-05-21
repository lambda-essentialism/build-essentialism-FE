/*import React from 'react'




export default class Login extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        email : '',
        password: ''
      };
    }
    handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value
      });
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch('https://lambda-essentialism-backend.herokuapp.com/api/oauth/token', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push('/');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <h1>Login Below!</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
         <input type="submit" value="Submit"/>
        </form>
      );
    }
  }*/

import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { withCookies } from "react-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cookies: props.cookies,
      credentials: {
        username: "",
        password: ""
      },
      token: ""
    };
  }

  login = e => {
    e.preventDefault();
    axios
      .post(
        "https://lambda-essentialism-backend.herokuapp.com/api/oauth/token",
        this.state.credentials
      )
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          credentials: {
            username: "",
            password: ""
          }
        });
        this.state.cookies.set("", res.data.token);
        this.props.history.push("/values");
      })
      .catch(error => console.log(error));
  };

 

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div className="header" onClick={this.logout}>
            
          </div>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <h3>Register for a account </h3>

        <Link className="link" to="/Register">
          Register
        </Link>
      </div>
    );
  }
}

export default withCookies(Login);