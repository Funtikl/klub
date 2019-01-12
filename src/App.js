import React, { Component } from 'react';
import Header from './components /homepage/header';


//modules
import cssStyles from './First.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
      </div>
    );
  }
}

export default App;
