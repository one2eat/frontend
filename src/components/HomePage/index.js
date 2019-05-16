import React, { Component } from "react";
import { HomeFrontpage } from "./frontpage";
import { ToastContainer } from "react-toastify";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <HomeFrontpage />
      </div>
    );
  }
}
