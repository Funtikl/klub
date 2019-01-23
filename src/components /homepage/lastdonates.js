import React, { Component } from "react";
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
import homestyles from "./home.module.css";

import image1 from './images/img_1.jpg';
import image2 from './images/img_2.jpg';
export default class LastDonat extends Component {
  render() {
    return (
      <div className={homestyles.lastDonatDiv}>
        <h2 className={homestyles.lastDonatH2}>Last Donations</h2>
        <Row>
          <Col sm="3">
            <Card className={homestyles.lastDonatCard} style={{border:'0px',backgroundColor:'#FAFAFA' }} body>
              <CardImg className={homestyles.lastDonatImg} src={image1} />
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}} className={homestyles.lastDonatCardTitle}>Special Title Treatment</h2>
             
              <CardLink className={homestyles.lastDonateButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
          <Col sm="3">
            <Card className={homestyles.lastDonatCard} style={{border:'0px' ,backgroundColor:'#FAFAFA'}} body>
              <CardImg className={homestyles.lastDonatImg} src={image2}/>
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}}  className={homestyles.lastDonatCardTitle}>Special Title Treatment</h2>
              
              <CardLink className={homestyles.lastDonateButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
          <Col sm="3">
            <Card className={homestyles.lastDonatCard} style={{border:'0px' ,backgroundColor:'#FAFAFA'}} body>
              <CardImg className={homestyles.lastDonatImg} src={image2}/>
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}}  className={homestyles.lastDonatCardTitle}>Special Title Treatment</h2>
              
              <CardLink className={homestyles.lastDonateButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
          <Col sm="3">
            <Card className={homestyles.lastDonatCard} style={{border:'0px' ,backgroundColor:'#FAFAFA'}} body>
              <CardImg className={homestyles.lastDonatImg} src={image2}/>
              <h2 style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'20px'}}  className={homestyles.lastDonatCardTitle}>Special Title Treatment</h2>
              
              <CardLink className={homestyles.lastDonateButton1} href="#">Card Link</CardLink>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
