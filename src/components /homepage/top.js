import React, { Component } from 'react'
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
  import homestyles from './home.module.css';
export default class Top extends Component {
  render() {
    return (
      <div className={homestyles.topCardsDiv}>
        <h2 className={homestyles.topH2}>Top Donations</h2>
      <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
      </div>
    )
  }
}
