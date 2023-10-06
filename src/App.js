import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

// API key: 5d7cd297fbb7438680f42c9c09d1f7ea

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News/>
      </>
    )
  }
}
