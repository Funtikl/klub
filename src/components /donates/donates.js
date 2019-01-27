import React, { Component } from 'react'
import {
    Card,
    CardImg,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    CardLink
  } from "reactstrap";
  import homestyles from '../cssComponents.module.css';
  
  import image1 from '../homepage/images/img_1.jpg';
  import image2 from '../homepage/images/img_2.jpg'
  //components

import Testimate from './testimate';

export default class Donates extends Component {
  render() {
    return (
        <div className={homestyles.donatesDiv}>
        <h2 className={homestyles.donatesH2}>Last Donations</h2>
        <Row>
          <Col sm="3">
            <Card className={homestyles.donatesCard} style={{border:'0px',backgroundColor:'#FAFAFA' }} body>
              <CardImg className={homestyles.donatesImg} src={image1} />
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}} className={homestyles.donatesCardTitle}>Special Title Treatment</h2>
             
              <CardLink className={homestyles.donatesButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
          <Col sm="3">
            <Card className={homestyles.donatesCard} style={{border:'0px' ,backgroundColor:'#FAFAFA'}} body>
              <CardImg className={homestyles.donatesImg} src={image2}/>
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}}  className={homestyles.donatesCardTitle}>Special Title Treatment</h2>
              
              <CardLink className={homestyles.donatesButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
          <Col sm="3">
            <Card className={homestyles.donatesCard} style={{border:'0px' ,backgroundColor:'#FAFAFA'}} body>
              <CardImg className={homestyles.donatesImg} src={image2}/>
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}}  className={homestyles.donatesCardTitle}>Special Title Treatment</h2>
              
              <CardLink className={homestyles.donatesButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
          <Col sm="3">
            <Card className={homestyles.donatesCard} style={{border:'0px' ,backgroundColor:'#FAFAFA'}} body>
              <CardImg className={homestyles.donatesImg} src={image2}/>
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}}  className={homestyles.donatesCardTitle}>Special Title Treatment</h2>
              
              <CardLink className={homestyles.donatesButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
        </Row>

        <Testimate />
      </div>
    )
  }
}
