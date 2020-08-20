import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    };
  }

  handleFirstNum = (e) => {
    let numberParse = Number.parseInt(e.target.value, 10);
    this.setState({ num1: numberParse });
  };

  handleSecondNum = (e) => {
    let numberParse = Number.parseInt(e.target.value, 10);
    this.setState({ num2: numberParse });
  };

  addButton = (e) => {
    let { num1, num2 } = this.state;
    let result = num1 + num2;
    this.setState({ result: result });
  };

  subtractButton = (e) => {
    let { num1, num2 } = this.state;
    let result = num1 - num2;
    this.setState({ result: result });
  };

  multiplyButton = (e) => {
    let { num1, num2 } = this.state;
    let result = num1 * num2;
    this.setState({ result: result });
  };

  divideButton = (e) => {
    let { num1, num2 } = this.state;
    let result = num1 / num2;
    this.setState({ result: result });
  };

  clearButton = (e) => {
    this.setState({
      num1: "",
      num2: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Result: {this.state.result}</h1>
        <input
          onChange={this.handleFirstNum}
          placeholder="First number"
          value={this.state.num1}
        />
        <input
          onChange={this.handleSecondNum}
          placeholder="Second number"
          value={this.state.num2}
        />
        <button type="button" onClick={this.addButton}>
          {" "}
          +{" "}
        </button>
        <button type="button" onClick={this.subtractButton}>
          {" "}
          -{" "}
        </button>
        <button type="button" onClick={this.multiplyButton}>
          {" "}
          *{" "}
        </button>
        <button type="button" onClick={this.divideButton}>
          {" "}
          /{" "}
        </button>
        <button type="button" onClick={this.clearButton}>
          Clear Input
        </button>
      </div>
    );
  }
}

export default Calculator;
