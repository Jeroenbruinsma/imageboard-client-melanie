import React, { Component } from "react";

export default class UserDetails extends Component {
  render() {
    const userImages = this.props.images.filter(
      image => image.userId === this.user.id
    );
    console.log("props", this.props.user);
    if (this.props.user) {
      return (
        <div>
          <h1>{this.props.user.name}</h1>
          <p>{this.props.user.email}</p>
        </div>
      );
    } else {
      return <p>Loading....</p>;
    }
  }
}
