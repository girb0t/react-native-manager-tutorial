import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { emailValue: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, emailValue: action.payload };
  case PASSWORD_CHANGED:
    return { ...state, passwordValue: action.payload };
  default:
    return state;
  }
};
