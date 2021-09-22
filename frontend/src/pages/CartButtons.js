import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products-context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()

    return (
        <Wrapper className="cart-btn-wrapper">
         
        <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
            Cart 
           <FaShoppingCart/>
           
           <span className="cart-value">{total_items}</span>
           </span>
           </Link>
          {myUser ? <button type="button" className="auth-btn" 
          onClick={() => logout({returnTo: window.location.origin})}>Logout <FaUserMinus/></button> : 
          <button type="button" className="auth-btn" onClick={loginWithRedirect}>Login <FaUserPlus/></button>}
          
        </Wrapper>
    )
}


const Wrapper = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;




.cart-btn {
color: #1a1a1a;
font-size: 1.2rem;
letter-spacing: 2px;
display: flex;
align-items: center;
}

.cart-container {
  display: flex;
    align-items: center;
    position: relative;
   
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
}

.cart-value {
  
  
    position: absolute;
    top: -10px;
    right: -87px;
    background: #a1a29e;
    width: 6px;
    height: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    font-size: 0.55rem;
    color: white;
    padding: 10px;
    letter-spacing: 2px;
  }



  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    letter-spacing: 2px;
    padding: 20px;

   
  }

  @media (max-width: 992px) {
    .cart-value {
      display: none;
    }

    .cart-container {
      font-size: 1.2rem;
    }

   
  }
    
     

`
export default CartButtons
