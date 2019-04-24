import React from "react";

class TwitterMessage extends React.Component {

  state = {
    value: "",
    remainingChars: this.props.maxChars
  }

  handleInput = (event) => {
    // console.log(this.state.value.length)
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={event => this.handleInput(event)}/>
        <strong>Remaining Chars: {this.state.remainingChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
