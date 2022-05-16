import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import Main from "./components/main/Main.js";
import Setting from "./context/Setting.js";

export default class App extends React.Component {
  render() {
    return (
      <Setting>
        <Main />
      </Setting>
    );
  }
}
