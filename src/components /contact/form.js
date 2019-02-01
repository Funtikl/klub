import React from 'react';
import Mapimg from './map';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      <Form style={{marginTop:'1000px', position:'absolute'}}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>

      <Mapimg style={{position:'absolute', marginTop:'900px', float:'right'}} />

      </div>
    );
  }
}