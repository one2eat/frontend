import { toast } from "react-toastify";
import { push } from "connected-react-router";

import browserStorage from "../browserStorage";

export const logout = () => dispatch => {
  browserStorage.removeKey("isAuthenticated");
  browserStorage.removeKey("token");

  dispatch(push("/"));

  toast.info(`You are logged out!`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: false
  });
};
