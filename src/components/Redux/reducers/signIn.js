import * as actionTypes from "../actions/types";

const initialState = {
  signedIn: false
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return { ...state, signedIn: true };
      default:
      return state;
  }
};

export default signInReducer;
