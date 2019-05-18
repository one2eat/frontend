import axios from "axios";
import {push} from "connected-react-router"

export const getRecipeBegin = () => ({
  type: "GET_RECIPE_BEGIN"
});

// action creator when success
export const getRecipeSuccess = response => {
  return {
    type: "GET_RECIPE_SUCCESS",
    payload: response
  };
};

// action creator when error
export const getRecipeError = error => ({
  type: "GET_RECIPE_ERROR",
  payload: error
});

export const getRecipe = payload => async dispatch => {
  const token = await /"(.+)"/g.exec(localStorage.getItem("token"))[1];

  dispatch(getRecipeBegin());

  axios
    .get(`https://api.one2eat.co/recipes/${payload}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response);
      dispatch(getRecipeSuccess(response));
      dispatch(push("/recipe"))
    })
    .catch(error => {
      dispatch(getRecipeError(error));
    });
};
