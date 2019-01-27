import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import homestyles from './home.module.css';


export default class MinInfo extends Component {
  render() {
    return (
      <div>
        <Row className={homestyles.minInfo}>
        <Col className={homestyles.miniCol} sm='3'>
          <h3 className={homestyles.minih3}>Medical Mission</h3>
          <p className={homestyles.miniP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
          <a href="#">Learn more</a>
        </Col>
        <Col className={homestyles.miniCol} sm='3'>
          <h3 className={homestyles.minih3}>Make Donation Now</h3>
          <p className={homestyles.miniP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> 
          <a href="#">Learn more</a> 
        </Col>
        <Col className={homestyles.miniCol} sm='3'>
        <h3 className={homestyles.minih3}>We Need Volunteers</h3>
        <p className={homestyles.miniP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
        <a href="#">Learn more</a>
      </Col>
        </Row>
      </div>
    )
  }
}
