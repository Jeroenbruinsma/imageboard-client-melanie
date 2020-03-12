import React, { Component } from "react";

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.props.onSubmit}>
          <p>
            Name:
            <input
              name="name"
              type="text"
              value={this.props.value.name}
              onChange={this.props.onChange}
            />{" "}
            Email:
            <input
              name="email"
              placeholder="email"
              type="text"
              value={this.props.value.email}
              onChange={this.props.onChange}
            />{" "}
            Password:
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={this.props.onChange}
              value={this.props.value.password}
            />{" "}
            <button type="submit">Sign Up</button>
          </p>
        </form>
      </div>
    );
  }
}
