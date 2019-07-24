
export default (state = '', action) => {
  switch(action.type) {
    case 'SET_ZIP_CODE':
      return action.zipCode;
    default:
      return state;
  }
};
