import React, { Component } from "react";
import { Container, Col } from "reactstrap";
//import react-router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//import components homepage
import Header from "./components /homepage/header";
import Cover from "./components /homepage/cover";
import Footer from "./components /footer";
import Home from "./components /homepage/Home";
//gallery
import Gallery from "./components /gallery";

//modules
import cssStyles from "./First.module.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className={cssStyles.App}>
        <Container>
          <div>
            <Header />
          <Cover />
            <Route exact path="/" component={Home} />
           <Route path="/gallery" component={Gallery} />
          </div>
     
        </Container>
      </div>
      </Router>
    );
  }
}
Container.propTypes = {
  fluid: true
  // applies .container-fluid class
};

export default App;
