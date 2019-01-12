import React, { Component } from 'react';
import Header from './components /homepage/header';
import Cover from './components /homepage/cover';

//modules
import cssStyles from './First.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Cover />
      </div>
    );
  }
}

export default App;
