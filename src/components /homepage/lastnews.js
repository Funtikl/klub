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
          <Col sm="3">
            <Card body style={{border:"0"}}>
              
              <CardImg src={image} />
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button className={homestyles.newsButton}>Read</Button>
            </Card>
          </Col>
          <Col sm="3">
            <Card body style={{border:"0"}}>
              
              <CardImg src={image}  />
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button className={homestyles.newsButton}>Read</Button>
            </Card>
          </Col>
          <Col sm="3">
          <Card body style={{border:"0"}}>
            
            <CardImg src={image}  />
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button className={homestyles.newsButton}>Read</Button>
          </Card>
        </Col>
        </Row>
      </div>
    );
  }
}
