import React, { Component } from "react";

export default class UserDetails extends Component {
  render() {
    console.log("images", this.props.user.images);
    const userImages =
      this.props.user.images === undefined
        ? "No user"
        : this.props.user.images.map(img => {
            return (
              <div key={img.id}>
                <p>{img.title}</p>
                <img src={img.url} />
              </div>
            );
          });

    console.log("props", this.props.user.images);
    if (this.props.user) {
      return (
        <div>
          <h1>{this.props.user.name}</h1>
          <p>{this.props.user.email}</p>
          {userImages}
        </div>
      );
    } else {
      return <p>Loading....</p>;
    }
  }
}
