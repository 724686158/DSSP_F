import React, { Component } from 'react';
import CustomAccordion from './components/CustomAccordion'

export default class Home extends Component {
  static displayName = 'Home';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CustomAccordion />
      </div>
    );
  }
}
