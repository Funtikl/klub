import React, { Component } from "react";
import {
  Card,
  CardImg,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import homestyles from "./home.module.css";
import image from './images/img_1.jpg'
export default class LastNews extends Component {
  render() {
    return (
      <div className={homestyles.lastNewsDiv}>
        <h2 className={homestyles.lastNewsH2}>Last News</h2>
        <Row>
          <Col sm="4">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardImg src={image} />
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardImg src={image}  />
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="4">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardImg src={image}  />
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        </Row>
      </div>
    );
  }
}
