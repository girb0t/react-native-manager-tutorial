export default (state = {}, action) => {
  switch (action.type) {
  case 'EMAIL_CHANGED':
    return { ...state, emailValue: action.payload };
  default:
    return state;
  }
};
