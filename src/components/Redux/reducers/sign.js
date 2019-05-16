const initialState = {
  openLogin: true,
  openSignup: false
};

const sign = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_LOGIN":
      return {
        ...state,
        openLogin: true,
        openSignup: false
      };
    case "OPEN_SIGNUP":
      return {
        ...state,
        openSignup: true,
        openLogin: false
      };
    default:
      return state;
  }
};
export default sign;
