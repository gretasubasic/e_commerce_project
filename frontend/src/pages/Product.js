import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
import products_reducers from '../reducers/products_reducers'

const Product = ({id, image, name, price}) => {
    return (
        <Wrapper>
            <div className="container">
                <img src={image} alt="furniture" />
                <Link to={`/products/${id}`} className="link">
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>

            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.article`
font-family: -apple-system, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 0.1rem;

.container {
    position: relative;
    
    /*border-radius: 2px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center; */
    
}

img {
  width: 100%; 
    display: block;
    object-fit: cover;
    border-radius: 5px;
    

}

.link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: white;
    }
  }

  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 1rem;
    
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  
  



`

export default Product
