
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import { withRouter, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
fontawesome.library.add(faSearch);
const StyledButton = styled(Button) `
  background-color: #6ab637;
  margin-left: 5px;
`;
const StyledSearchInput = styled(Input) `
  margin-left: 0px;
  padding-left: 0px;
`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this .handleChange = this.handleChange.bind(this);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
        
    }

    handleSubmit(event) {
        console.log('A search was performed for: ' + this.state.value);
        this.props.history.push('/search');
        event.preventDefault();
    }

render() {
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <InputGroup className="mainSearch" size="lg">
            
            <Input type="text" value={this.state.value} onChange={this.handleChange} name="searchMain" id="searchMain" placeholder="Search Jobs by Craft" autoFocus="" />
            <StyledSearchInput type="text" value={this.state.value} onChange={this.handleChange} name="searchLocation" id="searchMain" placeholder="Location" />
            <StyledButton type="submit" value="submit" size="lg" ><FontAwesomeIcon icon="search" /></StyledButton>
        </InputGroup>
        </form>
        </div>
    )
}

}
export default withRouter(SearchBar);