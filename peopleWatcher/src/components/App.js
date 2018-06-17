import React, { Component } from 'react';
import eye from '../icons/eye-button.png';
import P5Wrapper from "./P5Wrapper.js"
import SidebarWrapper from './SidebarWrapper'
import '../App.css';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: "",
      slider: 100,
      value: null,
      activeElements: [] };
  }

  getValue = (value) => this.setState({ value });

  onReady = () => this.setState({ status: "ready" });

  onSliderChange = (event) => this.setState({ slider: +event.target.value });

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={eye} className="App-logo" alt="logo" />
        <h1 className="App-title">People Watcher</h1>
      </header>
      <div className='row'>

        <P5Wrapper
          // p5Props={{ slider: this.state.slider }}
          // getValue={this.getValue}
          onReady={this.onReady}
        />
        {/* <div style={{ textAlign: "center" }}>
          <strong>{this.state.slider}</strong>
          <br />
          <input type="range"
            min={5} max={290} step={1}
            // value={this.state.slider}
            style={{ width: "90%", maxWidth: "900px" }}
            // onChange={this.onSliderChange}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Sketch frame rate:&nbsp;
          <big><strong>{this.state.value}</strong></big>
          &nbsp;fps
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/atorov/react-p5js">
            <img border="0" alt="github logo" src="/img/github-logo.png" width="auto" height="28px" style={{ verticalAlign: "middle" }}/>
          </a>
        </p> */}
        <SidebarWrapper />
        </div>
      </div>
    );
  }
}
