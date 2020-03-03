import React, { Component } from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
import CreateFormContainer from "./CreateFormContainer";

class ListContainer extends Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    return (
      <div>
        <CreateFormContainer />
        <List images={this.props.images} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
