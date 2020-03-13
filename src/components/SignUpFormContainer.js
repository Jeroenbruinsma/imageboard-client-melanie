import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { createUser } from "../actions";

class SignUpFormContainer extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    message: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);

    this.setState({
      name: "",
      email: "",
      password: "",
      message: "You are sign up, you can login now."
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state}
      />
      {this.state.message}
      </div>
    );
  }
}
export default connect(null, { createUser })(SignUpFormContainer);
