import React, { Component } from "react";

export default class List extends Component {
  render() {
    const list = this.props.images.map(image => {
      return (
        <div key={image.id}>
          <h3>{image.title}</h3>
          <img alt={this.title} src={image.url} />
        </div>
      );
    });
    {
      if (!this.props.images) {
        return <div>Loading...</div>;
      } else {
        return list;
      }
    }
  }
}
