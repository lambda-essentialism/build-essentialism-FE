import axios from 'axios';

const API = 'https://lambda-essentialism-backend.herokuapp.com';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

//const API = 'https://lambda-essentialism-backend.herokuapp.com';

/*export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};*/

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`${API}/api/values`)
    .then(res => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: err
      });
    });
};

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
  mode: 'no-cors',
  method: 'post',
  withCredentials: true,
  auth: { username: 'lambda-client', password: 'lambda-secret' },
  data: queryString
};
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_VALUE_FAIL = 'ADD_VALUE_FAIL';

/*export const addValue = valueid => dispatch =>{
  axios.request(headers)
  .then(res => res.data.access_token)
  .then(token =>
    axios.post(`${API}/api/value/${valueid}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  )
      .then(res =>{
          dispatch({
              type:ADD_VALUE,
              payload: res.data

          })
      })
      .catch(err =>
        dispatch({
          type:ADD_VALUE_FAIL,
          payload:err
        })
        )



}*/

export const addValue = valueid => dispatch => {
  axios
    .post(
      `https://lambda-essentialism-backend.herokuapp.com/api/${valueid}/`,
      valueid,
      {
        headers: { Authorization: localStorage.getItem('token') }
      }
    )
    .then(res => {
      dispatch({
        type: ADD_VALUE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_VALUE_FAIL,
        payload: err
      })
    );
};

export const DELETE_VALUE = 'DELETE_VALUE';
export const DELETE_VALUE_FAIL = 'DELETE_VALUE_FAIL';

export const deleteValue = valueid => dispatch => {
  axios
    .request(headers)
    .then(res => res.data.access_token)
    .then(token =>
      axios.delete(`${API}/api/value/${valueid}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
    )
    .then(res => {
      dispatch({
        type: DELETE_VALUE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: DELETE_VALUE_FAIL,
        payload: err
      })
    );
};

/*export const ADD_TODO = 'ADD_TODO';
export const TODO_COMPLETE = 'TODO_COMPLETE';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleComplete = (index) => {
  return {
    type: TODO_COMPLETE,
    payload: index
  };
};*/
