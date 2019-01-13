import React, { Component } from 'react'
import { Media } from 'reactstrap';
import homestyles from './home.module.css';
import image from './images/bg_1.jpg';
export default class Cover extends Component {
  render() {
    return (
      <div >
       <img src={image} className={homestyles.prallax}  />
      </div>
    )
  }
}
