import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const FooterWrapper = styled.div`
    margin-top: 80px;
    border-top: 1px solid #FFAF0D;
    padding-bottom: 70px;
    background: #cdbb93;
    color: white;
    
    div {
        margin-top: 30px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #717171;
    }
    a {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #2F2F2F;
        text-decoration: none;
    }

`;

function Footer() {
  return (
    <FooterWrapper className="Container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
                Phone: 0801234567
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <Link to="/FoodList" > Make Order</Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                Address: 2 abc street
            </div>
        </div>
    </FooterWrapper>
  );
}

export default Footer;
