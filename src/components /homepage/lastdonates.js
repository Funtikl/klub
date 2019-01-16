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
          <Col sm="6">
            <Card className={homestyles.lastDonatCard} body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardImg src={image1} />
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <CardLink className={homestyles.lastDonateButton1} href="#">Card Link</CardLink>
              <CardLink className={homestyles.lastDonateButton2} href="#">Another Link</CardLink>
            </Card>
          </Col>
          <Col sm="6">
            <Card className={homestyles.lastDonatCard} body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardImg src={image2}/>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <CardLink className={homestyles.lastDonateButton1} href="#">Card Link</CardLink>
              <CardLink className={homestyles.lastDonateButton2} href="#">Another Link</CardLink>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
