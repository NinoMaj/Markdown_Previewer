/* eslint-disable */
import React, {Component} from 'react';

export class Box extends Component {
  render() {
    const self = this;
    const Response = React.createClass({
      render() {
        return (<div dangerouslySetInnerHTML={{__html: self.props.markedTerm}}></div>);
      }
    });
    return (
      <Response/>
    );
  }
}

Box.propTypes = {
  markedTerm: React.PropTypes.string
};
