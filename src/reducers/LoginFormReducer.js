export default (state = {}, action) => {
  switch (action.type) {
  case 'EMAIL_UPDATE':
    return { ...state, emailValue: action.payload };
  default:
    return state;
  }
};
