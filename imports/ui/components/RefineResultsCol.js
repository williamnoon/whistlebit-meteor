
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
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
    Col,
    Row,
    RowProps,
    Container,
    FormGroup,
    Input,
    Table
} from 'reactstrap'
const TableWrapper = styled(Table)`

  &  tr {
    border-top-style: hidden !important;
    border-bottom-style: hidden !important;
  },
    & tr > td > h6 {
    font-size: 110%;
    padding-bottom: 0px;
    padding-top: 10px;
    color: #1b1e21 !important;
  }
  
    & tr > td {
    font-size: 80%;
    padding-bottom: 0px;
    padding-top: 0px;
    color: #6b757c !important;
  }

  `
function SearchBreadCrumbs() {
    return (
        <Container>
        <p><small>electrician jobs in Williston, ND</small></p>
        </Container>
    )
};

function ReccommendedJobs() {
    return (
        <Container>
        <h6><a href="#">Recommended Jobs - 75 new</a></h6>
        </Container>
    )
};

function RecentSearches() {
    return (
        <Container>
        <h6>My Recent Searches</h6>
        <p>Williston, ND</p>
        <p>construction -Williston, ND</p>
        <p><a href="#">clear searches</a></p>
        </Container>
    )
};

function SortByRelevanceOrDate() {
    return (
        <Container>
        <h6>Sort By:</h6>
        <p><a href="#">Relevance</a> - <a href="#">Date</a></p>
        </Container>
    )
};

function SortByDistance() {
    return (
        <Container>
        <h6>Distance:</h6>
        <FormGroup>
            <Input type="select" name="select" id="distanceSelect">
            <option>Exact location only</option>
            <option>within 5 miles </option>
            <option>within 10 miles </option>
            <option>within 20 miles </option>
            <option>within 40 miles</option>
            <option>within 80 miles </option>
            <option>Any Distance</option>
            </Input>
        </FormGroup>
        </Container>
    )
};

function SortBy$Estimate() {
    return (
        <tbody>
            <tr>
            <td>
                <h6>Wage Estimate:</h6>
            </td>

        </tr>
        <tr>
            <td>$45,000</td>
            <td className="text-right">
            <a href="#">(16)</a>
            </td>
        </tr>
        <tr>
            <td>$50,000</td>
            <td className="text-right">
            <a href="#">(14)</a>
            </td>
        </tr><tr>
            <td>$55,000</td>
            <td className="text-right">
            <a href="#">(11)</a>
            </td>
        </tr>
        </tbody>
    )
};

function SortByJobType() {
    return (
        <tbody>
        <tr>
            <td>
                <h6>Job Type:</h6>
            </td>

        </tr>
        <tr>
            <td>Full Time</td>
            <td className="text-right">
            <a href="#">(16)</a>
            </td>
        </tr>
        <tr>
            <td>Contract</td>
            <td className="text-right">
            <a href="#">(14)</a>
            </td>
        </tr>
        </tbody>
    )
};

function SortByLocation() {
    return (
        
        <tbody>
        <tr>
            <td>
                <h6>Location:</h6>
            </td>

        </tr>
        <tr>
            <td>Williston</td>
            <td className="text-right">
            <a href="#">(13)</a>
            </td>
        </tr>
        <tr>
            <td>Tioga</td>
            <td className="text-right">
            <a href="#">(10)</a>
            </td>
        </tr><tr>
            <td>Minot</td>
            <td className="text-right">
            <a href="#">(3)</a>
            </td>
        </tr>
        </tbody>
    )
};

function SortByCompany() {
    return (
        
        <tbody>
            <tr>
            <td>
                <h6>Company:</h6>
            </td>

        </tr>
        <tr>
            <td>Muth Electruc</td>
            <td className="text-right">
            <a href="#">(4)</a>
            </td>
        </tr>
        <tr>
            <td>Xtreme Drilling Corp.</td>
            <td className="text-right">
            <a href="#">(2)</a>
            </td>
        </tr><tr>
            <td>C&W Services</td>
            <td className="text-right">
            <a href="#">(1)</a>
            </td>
        </tr>
        </tbody>
    )
};

function SortByExperienceLevel() {
    return (
        <tbody>
        <tr>
            <td>
                <h6>Experience Level:</h6>
            </td>

        </tr>
        <tr>
            <td>Entry Level</td>
            <td className="text-right">
            <a href="#">(11)</a>
            </td>
        </tr>
        <tr>
            <td>Helper</td>
            <td className="text-right">
            <a href="#">(4)</a>
            </td>
        </tr><tr>
            <td>Journeyman</td>
            <td className="text-right">
            <a href="#">(17)</a>
            </td>
        </tr>
        </tbody>
    )
};

export default class RefineResultsCol extends React.Component {
  render() {
    return (
        <Col xs="3" className="wrapper">
        <SearchBreadCrumbs className="text-muted"/>
        <ReccommendedJobs />
        <RecentSearches />
        <SortByRelevanceOrDate />
        <SortByDistance />
        <TableWrapper>
        <SortByExperienceLevel />
        <SortByJobType />
        <SortByLocation />
        <SortBy$Estimate />
        <SortByCompany />
        </TableWrapper>
      </Col>
    );
}
}