import React, { Component } from "react";
import { Container, Col } from "reactstrap";


import MinInfo from "./mininfo";
import Featured from "./featured";
import Top from "./top";
import LastDonat from "./lastdonates";
import Success from "./success";
import LastNews from "./lastnews";


export default class Home extends Component {
  render() {
    return (
      <div>
        <MinInfo />
        <Featured />
        <Featured />
        <Top />
        <LastDonat />
        <Success />
        <LastNews />
      </div>
    )
  }
}
