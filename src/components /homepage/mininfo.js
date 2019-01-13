import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import homestyles from './home.module.css';
export default class MinInfo extends Component {
  render() {
    return (
      <div>
        <Row className={homestyles.minInfo}>
        <Col>
          <h3>Medical Mission</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
        </Col>
        <Col>
          <h3>Make Donation Now</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
        </Col>
        <Col>
        <h3>We Need Volunteers</h3>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
      </Col>
        </Row>
      </div>
    )
  }
}
