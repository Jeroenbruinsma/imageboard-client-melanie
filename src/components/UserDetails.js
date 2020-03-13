import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserDetails extends Component {
  render() {
    console.log("images", this.props.selectedUser);
    const userImages =
      this.props.selectedUser.images === undefined
        ? "No user"
        : this.props.selectedUser.images.map(img => {
            return (
              <div key={img.id}>
                <p>{img.title}</p>
                <img src={img.url} />
                <button onClick={this.props.onDelete}>Delete image</button>
              </div>
            );
          });

    console.log("props", this.props.user.jwt);
    if (!this.props.user.jwt) {
      return (
        <div>
          <p>
            You need to <Link to={"/"}>login</Link>!
          </p>
        </div>
      );
    } else {
      if (this.props.selectedUser) {
        return (
          <div>
            <h1>{this.props.selectedUser.name}</h1>
            <p>{this.props.selectedUser.email}</p>
            {userImages}
          </div>
        );
      } else {
        return <p>Loading....</p>;
      }
    }
  }
}
