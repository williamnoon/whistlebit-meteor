
import React from 'react';
import { 
  Table, 
  Col, 
  Row, 
  RowProps, 
  Container,
  Card, 
  Button, 
  CardHeader, 
  CardFooter, 
  CardBody,
  CardTitle,
  CardText,
  Input,
  Form,
  FormGroup,
  Label } from 'reactstrap';

export default class AuxillaryCol extends React.Component {
      constructor(props){
        super(props);
      }
      
  render() {
    return (
      <Col xs="5" className="wrapper">
       {(this.props.postClicked)?<h5>Displaying Post Detail {this.props.postClicked}</h5>:<EmailAlerts />}
      </Col>
    );
}
}

function EmailAlerts(props){
  return(
    <Row>
        <Col xs="8" className="mx-auto">
      <Card body outline color="warning">
        <CardText>Be the first to know about jobs.</CardText>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="myemail@idk.cool" />
        </FormGroup>
        </Form>
        <br />
        <FormGroup check>
          <Label check>
            <Input type="checkbox" defaultChecked/>{''}
            Also get an email with jobs recommended just for me.
          </Label>
        </FormGroup>
        <br />
        <Button color="secondary">Activate</Button>
      </Card>
      </Col>
      </Row>
  )
}
function JobPostDetail(props){
  return(
    <Row>
        <Col xs="8" className="mx-auto">
      <Card body outline color="warning">
        <CardText>Be the first to know about jobs.</CardText>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="myemail@idk.cool" />
        </FormGroup>
        </Form>
        <br />
        <FormGroup check>
          <Label check>
            <Input type="checkbox" defaultChecked/>{''}
            Also get an email with jobs recommended just for me.
          </Label>
        </FormGroup>
        <br />
        <Button color="secondary">Activate</Button>
      </Card>
      </Col>
      </Row>
  )
}