import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUser, deleteImage } from "../actions";
import UserDetails from "./UserDetails";

class UserDetailsContainer extends Component {
  componentDidMount() {
    // console.log("params test", this.props.match.params);

    this.props.loadUser(Number(this.props.match.params.id));
  }

  onDelete = (imageId, userId) => {  //here
    console.log("button test", imageId, userId);   //here
    
    this.props.deleteImage(imageId, userId); //here
  };

  render() {
    return (
      <UserDetails
        user={this.props.user}
        selectedUser={this.props.selectedUser}
        onDelete={this.onDelete}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.users.selectedUser,
    users: state.users.users,
    user: state.user,
    image: state.images
  };
}

export default connect(mapStateToProps, { deleteImage, loadUser })(
  UserDetailsContainer
);
