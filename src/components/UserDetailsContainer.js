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
    

    return <UserDetails user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  console.log("mapstateToProps state image", state);
  return {
    user: state.users.selectedUser,
    users: state.users.users
  };
}

export default connect(mapStateToProps, { loadUser })(
  UserDetailsContainer
);
