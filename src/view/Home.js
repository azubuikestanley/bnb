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
            font-size: 20px;
            font-weight: 450;
            text-align: left;
            letter-spacing: 0.03em;
            color: #2F2F2F;
        }

        a {
            background-color:  #FFAF0D;
            color: white;
            padding: 7px 95px;
            border-radius: 50px;
            text-align: center;
            text-decoration: none;
            margin-left: 33px;
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
            margin-top: -370px;
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
    
    @media (max-width: 768px) {
        .main-top {
            margin-top: 50px;

            h4{
            font-style: normal;
            font-size: 30px;
            letter-spacing: 0.02em;

            span.style-45{
                font-size: 45px;
                }
            }
        }
        .main-top-left{

            .image-top {
                margin-top: -170px;
                right: 97px;
                width: 23rem!important;
            }
        }
    }
    @media (max-width: 425px) {
        .main-top {
            margin-top: 20px;

            h4{
            font-style: normal;
            font-size: 25px;
            letter-spacing: 0.02em;

            span.style-45{
                font-size: 45px;
                }
            }
        }
        .main-top-left{
            .image-top {
                display: none;
            }
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
                                <p className="ml-5">Local. Vegetarian. Continental.</p> <br /> 
                            </div>
                            <Link to="/FoodList">Order now</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 main-top-left">
                        <HomeNavCard />
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
                    <div className="card-deck">
                        <div className="card">
                            <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" className="card-img-top"  />
                            <div className="card-body">
                                <h5 className="card-title">Amala</h5>
                                <p className="card-text">This can be delivered within 1hr</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" className="card-img-top"  />
                            <div className="card-body">
                                <h5 className="card-title">Ewedu</h5>
                                <p className="card-text">This can be delivered within 1hr</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" className="card-img-top"  />
                            <div className="card-body">
                                <h5 className="card-title">Ewedu</h5>
                                <p className="card-text">This can be delivered within 1hr</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={require("../../src/components/assets/img/meal.png")} alt="Home-meal" className="card-img-top"  />
                            <div className="card-body">
                                <h5 className="card-title">Amala</h5>
                                <p className="card-text">This can be delivered within 1hr</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                    </div>
                    
                    
                </div>
            </div>

            <Footer />

        </HomeWrapper>
    )
}


export default Home;
