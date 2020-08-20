import React from "react";

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
    };
  }
  tick = () => {
    this.setState({ time: new Date() });
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let { time } = this.state;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return (
      <>
        <h1>Clock </h1>
        <div>
          {hours}: {minutes}: {seconds}
        </div>
      </>
    );
  }
}
export default Clock;
