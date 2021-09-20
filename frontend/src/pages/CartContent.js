import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from "./CartTotals"



const CartContent = () => {
    const {cart, clearCart } = useCartContext()
    return (
        <Wrapper className="section section center">
            <CartColumns />
            {cart.map((item) => {
                return <CartItem  key={item.id} {...item}/>
            })}

            <hr />

            <div className="link-container">
                <Link to="/products" className="btn">Continue Shopping</Link>
                <button type="button" className="btn" onClick={clearCart}>Clear Cart</button>
            </div>

            <CartTotals />

            

        </Wrapper>
    )
}

const Wrapper = styled.div`

hr {
    margin: 2rem;
}
.link-container {
    margin: 2rem;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: black;
    color: #fff;
    border-radius: 5px;
    letter-spacing: 2px;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: black;
    color: white;
  }
`

export default CartContent
