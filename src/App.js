import React, { Component } from 'react';
import DisplayCharacters from './components/displayCharacters';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <DisplayCharacters />
        <Footer />
      </div>
    );
  }
}

export default App;
