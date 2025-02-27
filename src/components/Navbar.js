import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    .home-style{
        color: #FFAF0D;
    }
`;



function Navbar() {
    return (

        <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><b className="ml-5 home-style">90's Foods</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse mr-5" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/foodlist">Meal Order</a>
                    </li>
                </ul>
            </div>
        </NavWrapper>

      

    );
}

export default Navbar;