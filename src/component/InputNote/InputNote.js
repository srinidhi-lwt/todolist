import React from 'react';
import './InputNote.css'

class InputNote extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      textValue: this.props.textValue
    }
  }

  updateText = (event) => {
    this.setState ({
      textValue: event.target.value
    });
  }

  submitItem = () => {
    this.props.submit(this.state.textValue)
    this.setState ({
      textValue: ''
    });
  }

  render() {
    return(
      <div className="input-note">
        <div className="input-label">Input text here</div>
        <div>
          <input type="text" value={this.state.textValue} onChange={this.updateText}></input>
        </div>
        <div className="submit" onClick = { this.submitItem } >Submit</div>
      </div>
    );
  }
}

export default InputNote;