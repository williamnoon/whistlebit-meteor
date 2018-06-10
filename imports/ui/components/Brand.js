
import React from 'react'
import styled from 'styled-components'


const BrandWrapper = styled.div`
      & .logo{
        display: flex;
        flex-direction: row;
        jusatify-content: center;
        margin-top: 100px;
        margin-bottom: 40px;
        margin-left: 73px;
        
      }
    `

    export default class Brand extends React.Component {
        render() {
          return (
        <BrandWrapper>
        <div className="logo">
        <img src={"whistlebit_logo_tt.png"} />
        </div>
        </BrandWrapper>
        
          );
      }
    }