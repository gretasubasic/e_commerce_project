import React from 'react'
import { useFilterContext } from '../context/filter_context'
import styled from 'styled-components'

const Sort = () => {
    const { filtered_products: products, sort, updateSort } =useFilterContext()
    return (
        <Wrapper>
           <p>{products.length} products found</p>
           <hr />
           <form action="">
               <label htmlFor="sort">Sort By: </label>
               <select name="sort" id="sort" className="sort-input" value={sort} onChange={updateSort}>
                   <option value="price-lowest">Lowest Price</option>
                   <option value="price-highest">Highest Price</option>
                   <option value="name-a">A to Z</option>
                   <option value="name-z">Z to A</option>
               </select>
           </form>
           </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
  align-items: center;
  margin-bottom: 2rem;
  


  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: transparent;
    margin-right: 5px;
    
    
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
    
  }

`

export default Sort
