import axios from "axios";
import {push} from "connected-react-router"

export const getRestaurantBegin = () => ({
  type: "GET_RESTAURANT_BEGIN"
});

// action creator when success
export const getRestaurantSuccess = response => {
  return {
    type: "GET_RESTAURANT_SUCCESS",
    payload: response
  };
};

// action creator when error
export const getRestaurantError = error => ({
  type: "GET_RESTAURANT_ERROR",
  payload: error
});

export const getRestaurant = payload => async dispatch => {
  const token = await /"(.+)"/g.exec(localStorage.getItem("token"))[1];

  dispatch(getRestaurantBegin());

  axios
    .get(`https://api.one2eat.co/restaurants/${payload}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response);
      dispatch(getRestaurantSuccess(response.data));
      dispatch(push("/restaurant"))
    })
    .catch(error => {
      dispatch(getRestaurantError(error));
    });
};
