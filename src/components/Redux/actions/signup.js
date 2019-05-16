import axios from "axios";
import { toast } from "react-toastify";

// action creator when begin
export const signupUserBegin = () => ({
  type: "SIGNUP_USER_BEGIN"
});

// action creator when success
export const signupUserSuccess = response => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    payload: {
      response: response
    }
  };
};

// action creator when error
export const signupUserError = error => ({
  type: "SIGNUP_USER_ERROR",
  payload: {
    error: error
  }
});

export const openLogin = () => {
  return {
    type: "OPEN_LOGIN"
  };
};

// signupUser is a thunk, because it:
// - delay the process for the next operation
// - return another function to be processed again
export const signupUser = payload => {
  return dispatch => {
    // SIGNUP_USER_BEGIN
    dispatch(signupUserBegin());

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk

    // Also able to use
    // requestAPI({
    // method: 'post',
    // url: '/users/signup',
    //  data: payload
    // })

    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/users/signup`, payload)
      .then(response => {
        // SIGNUP_USER_SUCCESS
        dispatch(signupUserSuccess(response));

        return response;
      })
      .then(() => {
        // Notify visitor with toast
        toast.info(`You are signed up!`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        });
      })
      .then(() => {
        dispatch(openLogin());
      })
      .catch(error => {
        // SIGNUP_USER_ERROR
        dispatch(signupUserError(error));

        // Notify visitor with toast
        toast.info(`Please input your data correctly`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        });
      });
  };
};
