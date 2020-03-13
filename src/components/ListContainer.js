import React, { Component } from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
// import CreateFormContainer from "./CreateFormContainer";
// import LoginFormContainer from "./LoginFormContainer";

class ListContainer extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      <div>
        {/* <LoginFormContainer />
        {this.props.user ? <CreateFormContainer /> : null} */}
        <List images={this.props.images} user={this.props.user} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(" list state", state.user);
  return {
    images: state.images,
    user: state.user
  };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
