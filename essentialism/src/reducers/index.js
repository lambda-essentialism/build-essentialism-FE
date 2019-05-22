import {
  
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    ADD_VALUE
   
  } from '../actions';
  
  const initialState = {
    
    values: [],
    loggingIn: false,
    
    error: '',
    errorStatusCode: null,
    fetching: false,
    token: localStorage.getItem('token')
  };
  
  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
        case FETCH_DATA_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetching: false,
        values: action.payload
      };
      case ADD_VALUE:
        return{
          values:action.payload
        }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  