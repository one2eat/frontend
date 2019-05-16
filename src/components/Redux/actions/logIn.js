import axios from "axios";
import { toast } from "react-toastify";
import { push } from "connected-react-router";

import browserStorage from "../browserStorage";
// import requestAPI from '../requestAPI'

// action creator when begin
export const loginUserBegin = () => ({
  type: "LOGIN_USER_BEGIN"
});

// action creator when success
export const loginUserSuccess = response => {
  return {
    type: "LOGIN_USER_SUCCESS",
    payload: {
      response: response
    }
  };
};

// action creator when error
export const loginUserError = error => ({
  type: "LOGIN_USER_ERROR",
  payload: {
    error: error
  }
});

export const setUserState = user => ({
  type: "SET_USER_STATE",
  payload: {
    user: user
  }
});

// loginUser is a thunk, because it:
// - delay the process for the next operation
// - return another function to be processed again
export const loginUser = payload => {
  return dispatch => {
    // LOGIN_USER_BEGIN
    dispatch(loginUserBegin());

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk

    // Also able to use
    // requestAPI({
    // method: 'post',
    // url: '/users/login',
    //  data: payload
    // })

    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/users/signin`, payload)
      .then(response => {
        // LOGIN_USER_SUCCESS
        dispatch(loginUserSuccess(response));

        // Set isAuthenticated to true in the storage
        browserStorage.setKey("isAuthenticated", true);
        // Set token in the storage
        browserStorage.setKey("token", response.data.data.token);

        return response;
      })
      .then(response => {
        // Set state.user to contain user's data from response
        dispatch(
          setUserState({
            token: response.data.token,
            // name: response.data.user.name,
            // email: response.data.user.email,
            isAuthenticated: true
          })
        );
      })
      .then(() => {
        // https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action
        // Redirect to profile page after login is success
        dispatch(push("/dashboard"));
        // Notify visitor with toast
        toast.info(`you are logged in! This is your profile`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        });
      })
      .catch(error => {
        // LOGIN_USER_ERROR
        dispatch(loginUserError(error));

        // Set isAuthenticated to false in the storage
        browserStorage.setKey("isAuthenticated", false);
        //

        // Notify visitor with toast
        toast.info(`Please check again your email and password`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        });
      });
  };
};
