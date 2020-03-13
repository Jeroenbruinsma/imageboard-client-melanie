import React, { Component } from "react";

export default class UserDetails extends Component {
  render() {
    console.log("images", this.props.user.images);
    // const userImages = this.props.user.images.map(image => {
    //   return (<div>
    //     <p>{image.title}</p>
    //     <p>{image.url}</p>
    //   </div>)
    // })
    console.log("props", this.props.user);
    if (this.props.user) {
      return (
        <div>
          <h1>{this.props.user.name}</h1>
          <p>{this.props.user.email}</p>
          {/* <div>{userImages}</div> */}
        </div>
      );
    } else {
      return <p>Loading....</p>;
    }
  }
}
