import React, { Component } from "react";
import Main from "./componente/Main";
export default class todo extends Component {
  render() {
    return (
      <>
        <div>
          <h1>ToDo List</h1>
          <Main />
        </div>
      </>
    );
  }
}
