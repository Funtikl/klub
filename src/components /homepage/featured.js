import React, { Component } from 'react'
import {Media, Button} from 'reactstrap';
import homestyles from './home.module.css';
import image2 from './images/bg_2.jpg';
export default class Featured extends Component {


  render() {
    return (
      <div className={homestyles.featured}>
      <Media src={image2} className={homestyles.featuredImage} />
      <div className={homestyles.featuredText}>
        <h4 className={homestyles.featuredH4}>Featured</h4>
        <h2 className={homestyles.featuredH2}>
        School in Africa Need Renovations</h2>
        <p className={homestyles.featuredInfo}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <p className={homestyles.featuredDonationInfo}>Last donation 1w ago</p>
        <span></span>
        <p> $8,100 raised of $30,000 </p>

    </div>
        <Button className={homestyles.featuredButton}>Donate Now</Button>

      </div>
    )
  }
}
