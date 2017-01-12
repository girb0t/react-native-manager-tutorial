import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  emailValue: '',
  passwordValue: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, emailValue: action.payload };
  case PASSWORD_CHANGED:
    return { ...state, passwordValue: action.payload };
  case LOGIN_USER_SUCCESS:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};
