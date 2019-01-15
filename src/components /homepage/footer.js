import React, { Component } from 'react';
import {Row, Col, Media, Button} from 'reactstrap';
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col>
            <h1>ABOUT US</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <Button>Join</Button>
        </Col>
        <Col>
            <h1>BLOG</h1>
            <Media />
            <h1></h1>
            <p>Give Meal A Day</p>
            <p> July 29, 2018</p>
            <p> Admin</p>
            <p>19</p>
            <Media />
            <h1></h1>
            <p>Give Meal A Day</p>
            <p> July 29, 2018</p>
            <p> Admin</p>
            <p>19</p>
            <Media />
            <h1></h1>
            <p>Give Meal A Day</p>
            <p> July 29, 2018</p>
            <p> Admin</p>
            <p>19</p>
        </Col>
        <Col>
            <h1>CONTACT INFO</h1>
            <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p>	+2 392 3929 210
            </p>
            <p>	info@yourdomain.com
            </p>
            <p>	Monday — Friday 8:00am - 5:00pm</p>
        </Col>
        </Row>
      </div>
    )
  }
}
