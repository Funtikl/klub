import React, { Component } from 'react'
import {Row, Col} from 'reactstrap';
import cssComp from '../cssComponents.module.css';
export default class Testimate extends Component {
  render() {
    return (
      <div className={cssComp.testimateDiv}>
           <h1 className={cssComp.testimateH1}>Testimonial</h1>
           <Row className={cssComp.testimateRow}>
           <Col className={cssComp.testimateCol}>
           <p className={cssComp.testimateP}>
           “A small river named Duden flows by their place and supplies it with the necessary regelialia.”
           </p> 
           <p className={cssComp.testimateP2}>-Nigar Kazim</p>
           </Col> 
           <Col className={cssComp.testimateCol}>
           <p className={cssComp.testimateP}>
           “A small river named Duden flows by their place and supplies it with the necessary regelialia.”
           </p> 
           <p className={cssComp.testimateP2}>-Fuad Rustam</p>
           </Col>
           </Row>
      </div>
    )
  }
}
