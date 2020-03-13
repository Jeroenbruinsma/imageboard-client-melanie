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

const mapStateToProps = state => ({
  users: state.users.users,
  images: state.image
});

export default connect(mapStateToProps, { loadUsers })(UserListContainer);
