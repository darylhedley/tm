import React, { Component } from 'react';
import Navigation from '../components/navigation';

class NavigationContainer extends Component {
  render() {
    return (
      <Navigation
        authentication={this.props.authentication}
      />
    );
  }
};

export default NavigationContainer;