import React, { Component } from "react";
import LoggedInFrontPage from './loggedIn';

export default class IndexFrontPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
       <LoggedInFrontPage />
      </div>
    );
  }
}
