import React from 'react';
import HomeNavCard from '../../src/components/assets/svg/HomeNavCard';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


const HomeWrapper = styled.div`
	.main-top {
        margin-top: 180px;

        
        h4{
            font-style: normal;
            font-size: 55px;
            font-weight: bold;
            text-align: justify;
            letter-spacing: 0.03em;
            color: #2F2F2F;

            span.style-45{
                color: #FFAF0D;
                font-size: 65px;

            }
        }
        p{
            font-style: normal;
            font-weight: 650;
            text-align: justify;
            letter-spacing: 0.03em;
            color: #2F2F2F;
        }

        a {
            background-color:  #FFAF0D;
            color: white;
            padding: 7px 40px;
            border-radius: 50px;
            text-decoration: none;
        }
        a:hover{
            background-color: white;
            border: 2px solid #FFAF0D;
            color: #FFAF0D;
        }
    }
    .main-top-left{
        position: relative;
        right: -15px;

        .image-top {
            margin-top: -350px;
            position: absolute;
            right: 50px;
        }
    }
    .menustyle{
        margin-top: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #2F2F2F;
    }
    .menustyle2{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #717171;
    }
    .menuCard1{
        border: 3px solid #FFAF0D;
        width: 80px;
        height: 180px;
        background: #FFFBF2;
        box-sizing: border-box;
        border-radius: 18px;
        margin: 10px 2px 0 2px;
        padding: 5px;

        img{
            display: flex;
            justify-content: center;
        }
    }
    
`;
 

function Home() {
    return (
        <HomeWrapper>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 main-top">
                        <div className="container">
                            <div className="row">
                                <h4 className="ml-5">Get Your Favourite Food Delivered in <br/><span className="style-45">45</span> Minutes</h4>
                                <p>Local. Vegetarian. Continental.</p>
                                <Link to="/FoodList">Order now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 main-top-left">
                        <HomeNavCard className="svgStyle"/>
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-nav-meal" className="image-top" />
                    </div>
                </div>
            </div>
            
            <div className="container mt-5">
                <h2 className="d-flex justify-content-center menustyle">MENU</h2>
                <h6 className="d-flex justify-content-center menustyle2">Discover a new level of taste</h6>
            </div>

            
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 menuCard1">
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" height={100} />
                        <p className="d-flex justify-content-center mt-5">Drinks</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 menuCard1">
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" height={70} />
                        <p className=" d-flex justify-content-center mt-5">Meat</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 menuCard1">
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" height={70} />
                        <p className=" d-flex justify-content-center mt-5">Fish</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 menuCard1">
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" height={70} />
                        <p className=" d-flex justify-content-center mt-5">Chicken</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 menuCard1">
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" height={70} />
                        <p className=" d-flex justify-content-center mt-5">Name</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 menuCard1">
                        <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" height={70} />
                        <p className=" d-flex justify-content-center mt-5">Name</p>
                    </div>
                </div>
            </div>

            <Footer />

        </HomeWrapper>
    )
}


export default Home;
