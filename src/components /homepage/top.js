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

import image1 from './images/img_1.jpg';
import image2 from './images/img_2.jpg';
import image3 from './images/img_3.jpg';
export default class Top extends Component {
  render() {
    return (
      <div className={homestyles.topCardsDiv}>
        <h2 className={homestyles.topH2}>Top Donations</h2>
        <Row>
          <OwlCarousel autoplay={true} nav={true} dots={true}  className="owl-theme"  loop items={4} margin={10}>
            <Col className={homestyles.topCol} class='item' sm="12">
              <Card style={{borderColor:'white'}} body>
              <CardImg src={image1} />
                <h4 className={homestyles.cardTitle}>Special Title Treatment</h4>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>

              </Card>
            </Col>
            <Col className={homestyles.topCol} class="item" sm="12">
              <Card style={{borderColor:'white'}}  body>
              <CardImg src={image2} />
              <h4 className={homestyles.cardTitle}>Special Title Treatment</h4>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>

              </Card>
            </Col>
            <Col className={homestyles.topCol} class="item" sm="12">
            <Card style={{borderColor:'white'}}  body>
            <CardImg src={image3} />
            <h4 className={homestyles.cardTitle}>Special Title Treatment</h4>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>

            </Card>
          </Col>
          </OwlCarousel>
        </Row>
      </div>
    );
  }
}
