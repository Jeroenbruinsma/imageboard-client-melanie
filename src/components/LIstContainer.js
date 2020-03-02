import React, { Component } from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    return <List images={this.props.images} />;
  }
}

function mapStateToProps(state) {
  return { images: state.images };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
