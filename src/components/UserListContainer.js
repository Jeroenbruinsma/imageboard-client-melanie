import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUsers } from "../actions";

import UserList from "./UserList";

class UserListContainer extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return <UserList users={this.props.users} images={this.props.images} />;
  }
}

function mapStateToProps(state) {
  return { users: state.users.users, images: state.image, user: state.user };
}

export default connect(mapStateToProps, { loadUsers })(UserListContainer);
