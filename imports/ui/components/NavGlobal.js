
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap'
import { PropTypes } from 'proptype'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavGlobal extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
        <div className="wrapper">
          <Navbar className="light">
              <Nav>
                <NavItem>
                  <NavLink className="text-muted" href="/components/">WhistleBit</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-muted" href="#">WhistleBots</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-muted" href="#">Employers / Post Job</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-muted" href="#"></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
          );
        }
      }