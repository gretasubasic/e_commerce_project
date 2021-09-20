import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'


const CartItem = ({id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext();

    const increase = () => {
      toggleAmount(id, "inc")

    }

    const decrease = () => {     
       toggleAmount(id, "dec")


    }

   
    return (
        <Wrapper>
            <div className="title">
                <img src={image} alt="" />
                <div>
                    <h5 className="name">{name}</h5>
                    <p className="color">
                    color: <span style={{background: color}}></span>
                    </p>
                    <h5 className="price-small">{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className="price">{formatPrice(price)}</h5>
            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
            <h5 className="subtotal">{formatPrice(price * amount)}</h5>
            <button type="button" className="remove-btn" onClick={() => removeItem(id)}><FaTrash /></button>
        </Wrapper>
    )
}

const Wrapper = styled.article`
margin: 4rem;

 .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 5px;
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .color {
    color: black;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: 5px;
    }
  }
  .price-small {
    color: black;
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: white;
    background: transparent;
    border: transparent;
    letter-spacing: 2px;
    background: black;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: black;
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: black;
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
