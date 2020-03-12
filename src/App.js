import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";
import UserListContainer from "./components/UserListContainer";
import UserDetailsContainer from "./components/UserDetailsContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/user/:id" exact component={UserDetailsContainer} />
          <Route path="/user" exact component={UserListContainer} />
          <Route path="/" exact component={ListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
