import axios from "axios";

export const searchMenuBegin = () => ({
  type: "SEARCH_MENU_BEGIN"
});

export const searchMenuSuccess = response => ({
  type: "SEARCH_MENU_SUCCESS",
  payload: response.data
});

export const clearMenu = () => ({
  type: "CLEAR_MENU"
});

export const getMenuToSearch = value => async dispatch => {
  dispatch(searchMenuBegin());

  await axios
    .get(`${process.env.REACT_APP_BACKEND_URI}/search?q=${value}`)
    .then(response => {
      dispatch(searchMenuSuccess(response));
    })
    .catch(error => console.log(error));
};
