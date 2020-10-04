import React, { Component } from 'react';
import './App.css';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <span> 
        please select a card below
        {this.props.name}
      </span>
    )
  }
}