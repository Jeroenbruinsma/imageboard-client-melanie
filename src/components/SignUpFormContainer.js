import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { createUser } from "../actions";

class SignUpFormContainer extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);

    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state}
      />
    );
  }
}
export default connect(null, { createUser })(SignUpFormContainer);
