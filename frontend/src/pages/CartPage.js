import React from 'react'
import { useCartContext } from "../context/cart_context"
import styled from "styled-components"
import {Link } from "react-router-dom"
import PageHero from "./PageHero"
import CartContent from './CartContent'

const Cart = () => {
    const { cart } = useCartContext();
    if (cart.length < 1 ) {
        return <Wrapper className="page-100">
            <div className="empty">
                <h2>Your Cart Is Empty</h2>
                <Link to="/products" className="btn">Shop Now</Link>
                </div>

        </Wrapper>
        
    }
    return (
      <main>
          <PageHero title="cart"/>
          <Wrapper className="page">
          <CartContent />
          </Wrapper>
          
      </main>
        
    )
}


const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`
export default Cart
