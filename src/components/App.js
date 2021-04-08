import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
      interval: ""
    };
  }
  componentDidMount() {
    let id = setInterval(() => {
      let newTime = new Date().toLocaleTimeString();
      this.setState({ time: newTime });
    }, 1000);
    this.setState({ interval: id });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div classname="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default App;
