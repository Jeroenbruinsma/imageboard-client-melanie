import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import LIstContainer from "./components/LIstContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LIstContainer />
      </Provider>
    );
  }
}

export default App;
