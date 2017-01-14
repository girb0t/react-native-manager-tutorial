import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE = {
  emailValue: '',
  passwordValue: '',
  user: null,
  errorMessage: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, emailValue: action.payload };
  case PASSWORD_CHANGED:
    return { ...state, passwordValue: action.payload };
  case LOGIN_USER_START:
    return { ...state, loading: true, error: '' };
  case LOGIN_USER_SUCCESS:
    return { ...state, user: action.payload, errorMessage: '', loading: false };
  case LOGIN_USER_FAIL:
    return {
       ...state,
       errorMessage: 'Authentication Failed.',
       passwordValue: '',
       loading: false
     };
  default:
    return state;
  }
};
