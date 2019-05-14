import axios from "axios";
import debounce from "lodash.debounce";
import { GET_MENU_TO_SEARCH } from "./types";

export const getMenuToSearch = value =>
  debounce(async dispatch => {
    if (value.length >= 3) {
      await axios
        .get(
          `http://ec2-18-218-96-166.us-east-2.compute.amazonaws.com/search?q=${value}`
        )
        .then(response => {
          dispatch({
            type: GET_MENU_TO_SEARCH,
            payload: response.data
          });
        })

        .catch(error => console.log(error));
    } else {
      dispatch({
        type: GET_MENU_TO_SEARCH,
        payload: { data: [] }
      });
    }
  });
