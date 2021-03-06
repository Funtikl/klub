import React, { Component } from "react";
import { Container, Col } from "reactstrap";
//import react-router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



//import components homepage
import Header from "./components /homepage/header";
import Cover from "./components /homepage/cover";
import Footer from "./footer";
import Home from "./components /homepage/Home";
//other components
import Gallery from "./components /gallery";
import Donates from "./components /donates/donates";
import Contact from "./components /contact/form";
import Blog from './components /blog';
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
              <Route path="/donates" component={Donates} />
              <Route path="/contact" component={Contact}/>
              <Route path="/blog" component={Blog} />
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
