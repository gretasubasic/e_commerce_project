import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user_context'


const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext();
    const { myUser, loginWithRedirect } = useUserContext();


    return (
        <Wrapper>
            <div>
                <article>
                    <h5>Subtotal: {formatPrice(total_amount)}</h5>
                    <hr />
                    <p>Shipping Fee: {formatPrice(shipping_fee)}</p>
                    <h4>Order Total: {formatPrice(total_amount + shipping_fee)}</h4>
                </article>
                {myUser ? <Link to="checkout" className="btn">Proceed To Checkout</Link> : <button onClick={loginWithRedirect} className="btn" type="button">Login</button> }
        
                <hr />
                
                
              

               
              
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.section`

margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1.5rem 3rem;


  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {

    .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    margin-left: 2rem;
    
    
  }


    article {
        margin: 2rem;

    }
   
    justify-content: flex-end;

  }
 
  .btn {
    width: 70%;
    margin-top: 1rem;
    text-align: center;
    margin-left: 2rem;
    
    
  }


`

export default CartTotals
