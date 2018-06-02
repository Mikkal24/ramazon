import React, { Component } from "react";

class OptionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    console.log("clicked");
    this.props.flag(this.props.name);
    this.setState({ selected: !this.state.selected });
  };

  render = () => {
    const myClass = this.state.selected
      ? "btn interest col s2 red"
      : "btn interest col s2";
    return (
      <a className={myClass} id={this.props.name} onClick={this.handleClick}>
        {this.props.name}
      </a>
    );
  };
}

export default OptionButton;
