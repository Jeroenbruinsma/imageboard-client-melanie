import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";
import CreateFormContainer from "./CreateFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";
import "./List.css";

export default class List extends Component {
  render() {
    const list = this.props.images.map(image => {
      return (
        <div key={image.id} className="image-box">
          <h3>{image.title}</h3>
          <img alt={this.title} src={image.url} />
        </div>
      );
    });
    {
      if (!this.props.images) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="containerList">
            {this.props.user ? (
              <div>
                <CreateFormContainer /><br />
                <Link to={"/user"}><button>See All Users</button></Link>
              </div>
            ) : (
              <div className="form-container">
                <LoginFormContainer />
                <SignUpFormContainer />
              </div>
            )}
            {list}
          </div>
        );
      }
    }
  }
}
