import axios from 'axios'


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

//const API = 'https://lambda-essentialism-backend.herokuapp.com';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};


export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';


export const getData = () => dispatch =>{
  dispatch({type: FETCH_DATA_START})
  axios.get('https://lambda-essentialism-backend.herokuapp.com/api/values/')
  .then(res =>{

      dispatch({
          type:FETCH_DATA_SUCCESS,
          payload: res.data })
  })
  .catch(err =>{
      dispatch({
          type:FETCH_DATA_FAILURE,
          payload: err

      })
  })
  
  
 
}
export const ADD_VALUE='ADD_VALUE'
export const ADD_VALUE_FAIL='ADD_VALUE_FAIL'

export const addValue = () => dispatch =>{
  axios.post('', )
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
      

  
}


export const ADD_TODO = 'ADD_TODO';
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
};