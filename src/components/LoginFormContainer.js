import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginFormContainer extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
      
    });
    this.setState({})
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null, { login })(LoginFormContainer);
