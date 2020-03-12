import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  render() {
    if (this.props.users) {
      const users = this.props.users.map(user => (
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ));
      return (
        <ul>
          {users}
        </ul>
      );
    } else {
      return <p>Loading.....</p>;
    }
  }
}
