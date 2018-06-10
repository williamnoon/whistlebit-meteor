
import React from 'react';
import { Table, Container, Media, MediaProps, Row, Col } from 'reactstrap';
import styled from 'styled-components'
const TableWrapper = styled(Table)`

  &  tr  {
    border-top-style: hidden !important;
    border-bottom-style: hidden !important;
    color: #1b1e21
  },

  &  tbody a.post  {
    a:hover {
      text-decoration: none;
  }
  },
    #heading {
    font-size: 130%;
    font-weight: bold;
    color: #1b1e21 !important;
  },
    #companylocation {
    font-size: 100%;
    font-weight: normal;
    padding-bottom: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    margin-top: 0px;
    color: #1b1e21;
  },
    #wage{
    font-size: 75%;
    font-weight: normal;
    padding-bottom: 10px;
    margin-bottom: 10px;
    padding-top: 0px;
    margin-top: 0px;
    color: #6b757c
  },
    #detailTruncated{
    font-size: 90%;
    font-weight: normal;
    padding-bottom: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    margin-top: 0px;
    color: #6b757c
  },
    #date{
    font-size: 90%;
    font-weight: normal;
    padding-bottom: 15px;
    margin-bottom: 15px;
    padding-top: 5px;
    margin-top: 5px;
    color: #6b757c
  },

  & th {
    border-top-style: hidden !important;
    border-bottom-style: hidden !important;
  }
  `
  const Posts = [
     { "id" : "1",
       "position" : "Electrician Helper",
       "company" : "Edison Electric",
       "location" : "Watford City, ND",
       "wage" : "$20 - $22 and Hour",
       "description" : "Works under the direct guidance of juourneyman and master electricians responsible for the project. Apprentice...",
       "datePosted" : "1 day ago"
     },
     { "id" : "2",
       "position" : "Journeyman Electrician",
       "company" : "MMR",
       "location" : "Watford City, ND",
       "wage" : "$25 - $29 and Hour",
       "description" : "We atrract and retain the best talent by investing in our employees and empowering them to develop...",
       "datePosted" : "1 day ago" 
    },
    {  "id" : "3",
       "position" : "Journeyman Electrician",
       "company" : "Ion Field Services",
       "location" : "Bismark, ND",
       "wage" : "$80,000 - $100,000 a year",
       "description" : "We atrract and reatin the bes talent by investing in our employees and empowering them to develop...",
       "datePosted" : "2days ago" 
    },
    {  "id" : "4",
       "position" : "Master Electrician",
       "company" : "Balkin Electric",
       "location" : "Watford City, ND",
       "wage" : "$50,000 - $80,000 a year",
       "description" : "We atrract and reatin the bes talent by investing in our employees and empowering them to develop...",
       "datePosted" : "2 days ago" 
    },
    {  "id" : "5",
       "position" : "Journey Electrician",
       "company" : "Oil & Gas",
       "location" : "Williston, ND",
       "wage" : "$78,000 - $99,000 a year",
       "description" : "We atrract and reatin the bes talent by investing in our employees and empowering them to develop...",
       "datePosted" : "3 days ago" 
    }
  ];
 function JobPost(props) {
    const posts = props.post; 
    const handleClick = props.action;
    const jobpost = posts.map((post) =>  (
        <tbody className="jobpost" key={post.id} onClick={(e) => handleClick(e, post.id)}>
           <tr><td id="heading"><h5>{post.position}</h5></td></tr>
           <tr><td id="companylocation">{post.company} - {post.location}</td></tr>
           <tr><td id="wage">{post.wage}</td></tr>
           <tr><td id="detailTruncated"> {post.description}</td></tr>
           <tr><td id="date">{post.datePosted}</td></tr>
        </tbody>
      ))
      return (
        <TableWrapper className="" >
         {jobpost}
        </TableWrapper>
      ); 
    }
export default class ResultsCol extends React.Component {
  constructor(props){
  super(props);
  } 
  render() {
    return (
    <Col xs="4" className="wrapper">
       <JobPost  post={Posts} action={this.props.action} />
    </Col>
    );
  }
}