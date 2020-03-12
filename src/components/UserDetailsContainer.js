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
    console.log("props container", this.props);

    return <UserDetails user={this.props.user} />;
  }
}

const mapStateToProps = state => ({
  user: state.users
  // images: state.image
});

export default connect(mapStateToProps, { loadUser })(UserDetailsContainer);
