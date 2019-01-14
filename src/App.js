import React, { Component } from 'react';
import {Container, Col} from 'reactstrap';


//import components
import Header from './components /homepage/header';
import Cover from './components /homepage/cover';
import MinInfo from './components /homepage/mininfo';
import Featured from './components /homepage/featured';
//modules
import cssStyles from './First.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
       <Header  />
       <Cover />
      <MinInfo />
      <Featured />
       </Container>
      </div>
    );
  }
}
Container.propTypes = {
  fluid: true
  // applies .container-fluid class
}

export default App;
