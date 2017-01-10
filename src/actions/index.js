import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({ emailValue, passwordValue }) => {
  // How redux-thunk is working:
  // 1. This action creator is called
  // 2. Action creator returns a function (as opposed to an object like usual)
  // 3. Redux thunk sees that we return a function and calls it with dispatch
  // 4. We do our login request
  // 5. ...wait...
  // 6. Request complete, user logged in
  // 7. `.then` runs which manually dispatches our action
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then((user) => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      });
  };
};
