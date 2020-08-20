import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      names: props.names,
    };
  }
  handleInput = (e) => {
    this.setState({ inputVal: e.target.value });
  };
  handleClick = (e) => {
    this.setState({ inputVal: e.target.id });
  };
  matches = (e) => {
    let matches = [];
    for (let i = 0; i < this.state.names.length; ++i) {
      if (this.inputVal === this.state.names[i]) {
        matches.push(e.target.id);
      }
    }
    return matches;
  };
  render() {
    let names = this.state.names;
    let matchesArray = this.matches();
    return (
      <>
        <input onChange={this.handleInput} />
        <ul onClick={this.handleClick}>
          {names.map((name) => {
            return (
              <li id={name} key={name}>
                {name}
              </li>
            );
          })}
        </ul>
        <div>
          {matchesArray.map((match) => {
            return <li id={match}> {match}</li>;
          })}
        </div>
      </>
    );
  }
}
export default Autocomplete;
