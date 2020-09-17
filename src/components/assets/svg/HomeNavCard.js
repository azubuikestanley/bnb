import React from 'react';
import styled from 'styled-components';

const HomeNavCardWrapper = styled.div`
	svg-container {
        width: 95;
    }
    
    @media (max-width: 425px) {
        display: none;
    }
`;

const HomeNavCard = props => (
    <HomeNavCardWrapper>
        <svg viewBox="0 0 665 516" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H665C665 0 665 322.741 665 389.08C665 455.419 398.238 584.228 213.787 471.326C29.3367 358.423 238.84 364.118 213.787 252.05C188.735 139.982 0 0 0 0Z" fill="#FFAF0D"/>
        </svg>
    </HomeNavCardWrapper>
);

export default HomeNavCard;

