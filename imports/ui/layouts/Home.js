
import React from 'react';
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.min.css'
import Brand from '../components/Brand'
import SearchBar from '../components/SearchBar'
import NavGlobal from '../components/NavGlobal'
import { Table, Col, Row, RowProps, Container } from 'reactstrap';
import { withRouter, Route, Redirect } from 'react-router-dom'

function Home() {
    return (
    <Container fluid>   
    <NavGlobal />
        <Row> 
            <Col xs={{ size: 3, offset: 4 }}>
            <Brand />
            </Col>
        </Row>
        <Row>
            <Col xs={{ size: 6, offset: 3 }}>
            <SearchBar />
            </Col>
        </Row>
    </Container>
    )
    };
    
    export default withRouter(Home);
