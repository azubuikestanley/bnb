import React from 'react';
import styled from 'styled-components';
import FoodList from '../../src/components/FoodList';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const MealWrapper = styled.div`
	h4{
        font-style: normal;
        font-weight: bold;
        text-align: justify;
        letter-spacing: 0.03em;
        color: #2F2F2F;
    }
`;


function Meal() {
    return (
        <MealWrapper>
            <Navbar />
                <h4 className="d-flex justify-content-center mt-5">Select your meal to make an order</h4>
                <FoodList />
            <Footer />
        </MealWrapper>
    )
}

export default Meal;
