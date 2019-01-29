import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import homestyles from './home.module.css';
import {FaBriefcaseMedical, FaDonate} from "react-icons/fa";
import {fadDonate} from "react-icons/fa";
import {FaPeopleCarry} from "react-icons/fa";

export default class MinInfo extends Component {
  render() {
    return (
      <div>
        <Row className={homestyles.minInfo}>
        <Col className={homestyles.miniCol} sm='3'>
          <h3 className={homestyles.minih3}>Medical Mission</h3>
          <FaBriefcaseMedical className={homestyles.medicalIcon} />
          <p className={homestyles.miniP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
          <a style={{color:"#9FDAC2"}} href="#">Learn more</a>
        </Col>
        <Col className={homestyles.miniCol} sm='3'>
          <h3 className={homestyles.minih3}>Make Donation Now</h3>
          <FaDonate className={homestyles.donateIcon} />
          <p className={homestyles.miniP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> 
          <a style={{color:"#9FDAC2"}} href="#">Learn more</a> 
        </Col>
        <Col className={homestyles.miniCol} sm='3'>
        <h3 className={homestyles.minih3}>We Need Volunteers</h3>
        <FaPeopleCarry className={homestyles.carryIcon} />
        <p className={homestyles.miniP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  
        <a style={{color:"#9FDAC2"}} href="#">Learn more</a>
      </Col>
        </Row>
      </div>
    )
  }
}
