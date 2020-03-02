import React, { Component } from "react";

export default class List extends Component {
  render() {
    const list = this.props.images.map(image => {
      return (
        <div>
          <h3>{image.title}</h3>
          <img src={image.url} />
        </div>
      );
    });
    return list;
  }
}
