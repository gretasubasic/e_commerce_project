import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ( {title, product} ) => {
    return (
        <Wrapper>
          <div className="section-center">
        <h3 className="hero-title">
            <Link to="/">Home</Link>
            {product && <Link to="/products">/Products</Link> }
            
            
            / {title}
        </h3> 
          </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
background: #0e0e0e;
width: 100%;
min-height: 20vh;
display: flex;
align-items: center;
color: white;

.hero-title {
  font-size: 30px;
}

a {
    color: #f3f3f3;
    padding: 0.5rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 30px;
    
}
`

export default PageHero
