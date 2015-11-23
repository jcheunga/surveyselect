import React, { Component } from 'react'
import Header from '../components/Header';
import Survey from '../components/Survey';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<Header/>
        <Survey/>
      </div>
    )
  }
}
