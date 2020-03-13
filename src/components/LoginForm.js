import React, { Component } from "react";


export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Login:</h3>
        <form onSubmit={this.props.onSubmit}>
          <p>
            Email:
            <input
              name="email"
              placeholder="email"
              type="text"
              values={this.props.values.email}
              onChange={this.props.onChange}
            />{" "}
            Password:
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={this.props.onChange}
              values={this.props.values.password}
            />{" "}
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    );
  }
}
