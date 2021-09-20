import React from 'react'
import { useProductsContext } from '../context/products-context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loading from './Loading'
import Error from './Error'
import Product from "./Product"

const FeaturedProducts = () => {
    const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext()
    if (loading) {
       return <Loading />
   }
   if (error) {
      return  <Error />
   }
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>Featured Products</h2>
            </div>
            <div className="section-center featured">
                {featured.slice(0,3).map((product) => {
                    return <Product key={product.id} {...product}/>
                })}

            </div>
        
       
        </Wrapper>
    
    )
}

const Wrapper = styled.section`
background: #ffffff;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 0.1rem;

h2 {
      
      color: black;
      font-size: 36px;
  }

  .featured {
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem;
    
   img {
    
      height: 225px;
      
    }
  }
.btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 450px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

`

export default FeaturedProducts
