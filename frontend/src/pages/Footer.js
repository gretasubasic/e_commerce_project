import React from 'react'
import styled from 'styled-components'


 const Footer = () => {
    return (
        <Container>
         
        <h5> <span>&copy;</span> Unwind Store</h5>
        <br />
        <h5>All rights reserved</h5>
        </Container>
    )
}

const Container = styled.footer`
margin-top: 5rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e0e0e;
  text-align: center;
  
  span {
    color: #fff;
  }
  
  h5 {
    color: #fff;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`
export default Footer
