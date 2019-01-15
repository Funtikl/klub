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
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Top extends Component {
  render() {
    return (
      <div className={homestyles.topCardsDiv}>
        <h2 className={homestyles.topH2}>Top Donations</h2>
        <Row>
          <OwlCarousel  className="owl-theme"  loop items={3} margin={10}>
            <Col className={homestyles.topCol} class='item' sm="10">
              <Card  body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col className={homestyles.topCol} class="item" sm="10">
              <Card  body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </OwlCarousel>
        </Row>
      </div>
    );
  }
}
