import React from 'react';
//import { BrowserRouter as Router,Route } from "react-router-dom";
//import './App.css';

const API = 'https://lambda-essentialism-backend.herokuapp.com/api/values/';
//const DEFAULT_QUERY = 'redux';

class Values extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
    };
  }

  componentDidMount() {
    fetch(API /*+ DEFAULT_QUERY*/)
      .then(response => response.json())
      .then(data => this.setState({ values: data }));
  }

  render() {
    const { values } = this.state;

    return (
      <ul>
        {values.map(value =>
          <li key={value.id}>
           {value.title}<button>Add</button>
          </li>
        )}
      </ul>
    );
  }
}

export default Values;
