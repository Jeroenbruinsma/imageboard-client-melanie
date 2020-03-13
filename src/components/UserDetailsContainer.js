import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUser } from "../actions";
import UserDetails from "./UserDetails";

class UserDetailsContainer extends Component {
  componentDidMount() {
    console.log("params test", this.props.match.params);

    this.props.loadUser(Number(this.props.match.params.id));
  }

  render() {
    

    return <UserDetails user={this.props.user} selectedUser={this.props.selectedUser} />;
  }
}

function mapStateToProps(state) {
  console.log("mapstateToProps state image", state.user);
  return {
    selectedUser: state.users.selectedUser,
    users: state.users.users,
    user: state.user
  };
}

export default connect(mapStateToProps, { loadUser })(
  UserDetailsContainer
);
