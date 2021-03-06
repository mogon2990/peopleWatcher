import React, { Component } from "react";
// import p5 from 'p5'
import sketch from "../sketch.js";

export default class P5Wrapper extends Component {
  // static propTypes = {
  //   p5Props: PropTypes.object.isRequired,
  //   getValue: PropTypes.func.isRequired,
  //   onReady: PropTypes.func.isRequired,
  // };

  componentDidMount() {
    this.canvas = new window.p5(sketch, "app-p5_container");
    this.canvas.setOnReady(this.props.onReady);
  }

  componentWillReceiveProps(nextProps) {
    this.canvas.pushProps({ ...this.props.p5Props, activeElements: this.props.activeElements });
  }

  shouldComponentUpdate() { // just in case :)
    return false;
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return (
      <div
        id="app-p5_container"
        style={{
          width: "88%",
          overflow: 'hidden',
          textAlign: "center",
          background: 'white' }}
      />
    );
  }
}
