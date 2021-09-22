import React from 'react'
import styled from "styled-components"
import homeBcg from "../images/homeBcg.jpg"
import homeBcg2 from "../images/homeBcg2.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <Wrapper className="section-center">
            <article className="content">
                <h1>Design Your <br/>
                Comfort Zone
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, 
                    excepturi praesentium quo sint asperiores dolorem a culpa quaerat natus ratione, veniam nam necessitatibus vel
                     harum facere! At reprehenderit omnis eveniet!</p>
                     <Link to="/products" className="btn">Shop Now</Link>
            </article>
            <article className="img-container">
                <img src={homeBcg} alt="background" className="main-img" />
                <img src={homeBcg2} alt="background" className="accent-img" />
                
                
            </article>


        </Wrapper>
    )
}


const Wrapper = styled.div`
min-height: 60vh;
padding-top: 4rem;
display: grid;
place-items: center;

.button {
    color: white;
    width: 150px;
    height: 50px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover {
        background: transparent;
        border: 1px solid black;
        color: black;
    }
  }


.img-container {
    display: none;
}

p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: black;
    font-size: 1rem;
  }

  h1 {
      font-size: 36px;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-size: 56px;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
    p {
      font-size: 1rem;
      padding-right: 2rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      margin-left: 10rem;
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 350px;
      transform: translateX(-70%);
      
    }
    

    .button {
    color: white;
    width: 150px;
    height: 50px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover {
        background: transparent;
        border: 1px solid black;
        color: black;
    }
  }
}
  
`
export default Hero
