import React from 'react'
import styled from "styled-components"
import PageHero from './PageHero'
import {Filters, Sort, ProductList } from "./index"

const ProductsPage = () => {
    return (
       <main className="">
           
            <PageHero title="products"/>
            <Wrapper className="page">
                <div className="section-center products">
                    <Filters />
                    <div>
                        <Sort />
                        <ProductList />
                    </div>
                </div>
            </Wrapper>

            </main>
      
    )
}


const Wrapper = styled.div`


  .products {
      
    display: grid;
    
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`
export default ProductsPage
