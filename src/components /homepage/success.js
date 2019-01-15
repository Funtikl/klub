import React, { Component } from 'react'
import {Media, Button} from 'reactstrap';
import homestyles from './home.module.css';
import image2 from './images/bg_2.jpg';
export default class Success extends Component {


  render() {
    return (
      <div className={homestyles.success}>
      <Media src={image2} className={homestyles.successImage} />
      <div className={homestyles.successText}>
        <h4 className={homestyles.successH4}>Success Stories</h4>
        <h2 className={homestyles.successH2}>
        School in Africa Need Renovations. Thanks To All Donors</h2>
        <p className={homestyles.successInfo}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <p className={homestyles.successDonationInfo}>Last donation 1w ago</p>
        <span></span>
        <p> $8,100 raised of $30,000 </p>

    </div>
        <Button className={homestyles.successButton}>Read Full Story</Button>

      </div>
    )
  }
}
