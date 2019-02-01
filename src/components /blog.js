import React, { Component } from 'react'
import {Row, Col, Card, Button, CardImg} from 'reactstrap';
import image from './homepage/images/img_1.jpg';
import image2 from './homepage/images/img_2.jpg';
export default class Blog extends Component {
  render() {
    return (
      <div style={{marginTop:'900px', position:'absolute'}}>
            <Row>
                <Col>
                    <Card>
                        <h2>Blog Text</h2>
                        <CardImg src={image} />
                        <p>Blog text about blog post</p>
                    </Card>
                </Col>
                <Col>
                <Card>
                    <h2>Blog Text</h2>
                    <CardImg src={image2} />
                    <p>Blog text about blog post</p>
                </Card>
            </Col>
            <Col>
            <Card>
                <h2>Blog Text</h2>
                <CardImg src={image} />
                <p>Blog text about blog post</p>
            </Card>
        </Col>
            </Row>
      </div>
    )
  }
}
