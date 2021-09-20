import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import {useCartContext} from "../context/cart_context"
import AmountButtons from "./AmountButtons"


const AddToCart = ({product}) => {
    const { id, stock, colors } = product;
    const {addToCart} = useCartContext()
    console.log(colors)
    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const increase = () => {
        // set amount will be the new value, old amount is before the update

        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if(tempAmount > stock) {
                tempAmount = stock

            } 
            return tempAmount
           
        })

    }

    const decrease = () => {

        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1
            } 
            return tempAmount
        })

    }

    return (
        <Wrapper>
            <div className="colors">
                <span>Colors: </span>
                <div>
                    {colors.map((color, index) => {
                        return <button key={index} style={{background: color}} className={`${mainColor === colors ? "color-btn-active" : "color-btn"}`}
                        onClick={() => setMainColor(color)}
                        >{mainColor === color ? <FaCheck /> : null}</button>

                    })}
                </div>

            </div>
            <div className="btn-container">
                <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                <Link to="/cart" className="btn" onClick={() => addToCart(id, mainColor, amount, product)}>Add To Cart</Link>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: #fff;
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

export default AddToCart