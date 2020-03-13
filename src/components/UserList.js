import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  render() {
    if (!this.props.user.jwt) {
      return (
        <div>
          <p>
            You need to <Link to={"/"}>login</Link>!
          </p>
        </div>
      );
    } else {
      if (this.props.users) {
        console.log("props", this.props);
        const users = this.props.users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ));
        return (
          <ul>
            <Link to={"/"}>
              <button>Back to all images</button>
            </Link>
            {users}
          </ul>
        );
      } else {
        return <p>Loading.....</p>;
      }
    }
  }
}
