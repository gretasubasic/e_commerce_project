import React from 'react'
import styled from "styled-components" 
import Filters from './Filters'
import {Product} from "./index"

const GridView = ({products}) => {
    return (
       <Wrapper>
          
           <div className="products-container">
               {products.map((product) => {
                   const {id} = product;
                   return <Product key={id} {...product} />
               })}
           </div>
           
       </Wrapper>
       
    )
}

const Wrapper = styled.section`

img {
    height: 175px;
}

.products-container {
    display: grid;
    grid-gap: 2rem 1rem;
    
}

@media (min-width: 992px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
