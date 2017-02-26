/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';

const styles = {
  inputBox: {
    height: "500px"
  }
};

export class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {term: `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`

    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    return (
      <textarea
        className="form-control"
        type="text"
        value={this.state.term}
        onChange={this.handleOnChange}
        style={styles.inputBox}
        ></textarea>
    );
  }

  handleOnChange(event) {
    this.setState({term: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }
}

InputBox.propTypes = {
  onSearchTermChange: React.PropTypes.func
};
