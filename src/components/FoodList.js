import React from 'react';
import styled from 'styled-components';

const FoodWrapper = styled.div`
	h4.breakfast {
        background: black;
        color: white;
    }
    li.listStyle{
        text-decoration: none;
    }
    .btn-style-minus{
        background-color: white;
        border: 1px solid #FFAF0D;
        color: #FFAF0D;
        margin-right:3px;
    }
    .btn-style-add{
        background-color: #FFAF0D;
        border: 1px solid #FFAF0D;
        color: white;
        margin-right:3px;
    }
`;


const BreakFast = [
    {
        "id": 1,
        "Foodname": "Akara",
        "Price": 100
    },
    {
        "id": 2,
        "Foodname": "Pap",
        "Price": 200
    },
    {
        "id": 3,
        "Foodname": "Suya",
        "Price": 500
    },
    {
        "id": 4,
        "Foodname": "Custard",
        "Price": 200
    }
];

const SuperLunch = [
    {
        "id": 1,
        "Foodname": "Yellow Garri",
        "Price": 200
    },
    {
        "id": 2,
        "Foodname": "Vegetable Soup",
        "Price": 1500
    },
    {
        "id": 3,
        "Foodname": "Beef",
        "Price": 500
    },
];

const ContinentalSpecial = [
    {
        "id": 1,
        "Foodname": "Chicken Salad",
        "Price": 1000
    },
    {
        "id": 2,
        "Foodname": "Smoothie",
        "Price": 1500
    },
    {
        "id": 3,
        "Foodname": "Toast Bread",
        "Price": 2000
    },
];


function Food(props) {
   
    const handleAdd = () => {
        
    }

    const arr1 = props.data;
    const listItems = arr1.map(item => 
        <li 
            className="d-flex justify-content-center mb-2 listStyle" 
            key={item.id} 
            name={item.Foodname} 
            value={item.Foodname}>
                    {item.Foodname} - Price: {item.Price} 
                <span className="ml-3">
                    <div></div>
                    <button onclick={handleAdd} className="btn-style-minus">-</button>
                    <button className="btn-style-add">+</button>
                </span>
            </li> 
    );
    return (
        <ul>
            {listItems} 
         </ul>
    );
    
}


function FoodList() {

    return (
        <FoodWrapper>
            <h4 className="d-flex justify-content-center mt-3 breakFast">Breakfast African</h4>
                <Food data={BreakFast} />
            <br />
            <h4 className="d-flex justify-content-center mt-2 lunch">Super lunch</h4>
                <Food data={SuperLunch} />
            <br />
            <h4 className="d-flex justify-content-center mt-2 special">Continental Special</h4>
                <Food data={ContinentalSpecial} />
        </FoodWrapper>
    )
}

export default FoodList;
