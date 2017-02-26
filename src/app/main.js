import React, {Component} from 'react';
import {Box} from './components/box';
import {InputBox} from './containers/input_box';
const marked = require('marked');

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  app: {
    marginTop: '50px'
  },
  box: {
    border: '1px solid #D9D9D9',
    height: "500px"
  }
};

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {term: `### Another deeper heading
 
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

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"`
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(term) {
    this.setState({term});
  }

  render() {
    // const handleSearch = term => this.handleSearch(term);
    const markedState = marked(this.state.term);
    return (
      <div className="app" style={styles.app}>
        <div className="container" style={styles.container}>
          <div className="row">
            <div className="col-sm-6">
              <InputBox onSearchTermChange={this.handleSearch}/>
            </div>
            <div className="col-sm-6" style={styles.box}>
              <Box style={styles.border} markedTerm={markedState}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
