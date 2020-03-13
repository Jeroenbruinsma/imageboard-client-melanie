import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUser , getImages} from "../actions";
import UserDetails from "./UserDetails";

class UserDetailsContainer extends Component {
  componentDidMount() {
    console.log("params test", this.props.match.params);
    this.props.getImages();
    this.props.loadUser(Number(this.props.match.params.id));
    
  }

  render() {
    console.log("props container", this.props);

    return <UserDetails user={this.props.user} images={this.props.images}/>;
  }
}

function mapStateToProps(state) {
  console.log("mapstateToProps state image", state)
 return { 
  user: state.users.selectedUser,
  users: state.users.users,
  images: state.image
}};


export default connect(mapStateToProps, { loadUser, getImages })(UserDetailsContainer);
