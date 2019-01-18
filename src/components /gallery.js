import React, { Component } from "react";
import { Row, Col, Media } from "reactstrap";
import cssComp from './cssComponents.module.css';
import image1 from '../components /homepage/images/img_1.jpg';
import image2 from '../components /homepage/images/img_2.jpg';
import image3 from '../components /homepage/images/img_3.jpg';
export default class Gallery extends Component {
    scaleImage=(e)=>{
        e.preventDefault();
        
    }
  render() {

    return (
      <div className={cssComp.gallery}>
        <Row>
          <Col sm='4'>
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image1} />
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image2} />
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image3} />
          </Col>
          <Col sm='4'>
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image1} />
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image2} />
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image3} />
          </Col>
          <Col sm='4'>
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image1} />
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image2} />
            <Media className={cssComp.galleryItem} onClick={this.scaleImage} src={image3} />
          </Col>
        </Row>
      </div>
    );
  }
}
