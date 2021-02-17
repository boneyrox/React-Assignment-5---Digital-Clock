import React, { Component } from "react";
import "./../styles/App.css";
let time = new Date();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  }

  render() {
    return (
      <div className="Clock">
        {this.state.hours}:{this.state.minutes}:{this.state.seconds}{" "}
        {this.state.hours >= 12 ? "PM" : "AM"}
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      let t = new Date();
      this.setState({
        hours: t.getHours(),
        minutes: t.getMinutes(),
        seconds: t.getSeconds()
      });
    }, 1000);
  }
}
