
import { Meteor } from 'meteor/meteor'
import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import NavGlobal from '../components/NavGlobal'
import ResultsCol from '../components/ResultsCol'
import RefineResultsCol from '../components/RefineResultsCol'
import AuxillaryCol from '../components/AuxillaryCol'
import Brand from '../components/Brand'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components'
import { PropTypes } from 'proptype'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';

const PageWrapper = styled(Container) `
  background-color: #f6f6f6;
  height: 100vh;
  padding: 0px

`;

const DivWrapper = styled.div`
      & .wrapper{
        
        border-style: none solid solid none;
        border-width: medium;
        border-color: #f6f6f6;
        background-color: white;
        padding: 5px;
        margin: 0px
        
      },
      & div.logo {
        padding-right: 0px;
        padding-left: 0px;
    
      },
      & div.searchbar {
        padding-left: 0px;
      }
    `;
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {postClicked: 0};
        this.postClickHandler = this.postClickHandler.bind(this);
    }
    postClickHandler= (e,postId) =>{e.preventDefault;
        this.setState({postClicked:postId}, console.log(postId, this.state.postClicked));
        alert("Job post Clicked:" + postId + this.state.postClicked);}
    render() {
        return (

            <PageWrapper fluid>
                <DivWrapper>
                    <NavGlobal expand />
                    <Row className="wrapper">
                        <Col xs="12" sm="3" className="logo">
                            <img className="logo" src={'whistlebit_logo_tt.png'} />
                        </Col>
                        <Col className="searchbar" xs="12" sm="6">
                            <SearchBar />
                        </Col>
                    </Row>
                    <Row>
                            <RefineResultsCol />
                            <ResultsCol action={this.postClickHandler}/>
                            <AuxillaryCol postClicked={this.state.postClicked} />
                    </Row>
                </DivWrapper>
            </PageWrapper>

        );
    }
}