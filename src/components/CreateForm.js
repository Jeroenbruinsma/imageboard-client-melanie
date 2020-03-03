import React, { Component } from "react";

export default class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <p>
            Title of the Image:
            <input
              name="title"
              placeholder="title"
              type="text"
              values={this.props.values.title}
              onChange={this.props.onChange}
            />{" "}
          </p>
          <p>
            URL of the Image:
            <input
              name="url"
              placeholder="url"
              type="text"
              onChange={this.props.onChange}
              values={this.props.values.url}
            />{" "}
          </p>
          <button type="submit">Add Image</button>
        </form>
      </div>
    );
  }
}
