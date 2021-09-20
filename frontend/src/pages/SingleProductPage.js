import React, { useEffect  } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from '../context/products-context'
import { single_product_url as url } from '../data'
import { formatPrice } from '../utils/helpers'
import { PageHero, Loading, ErrorPage, ProductImages, AddToCart } from "./index"
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SingleProductPage = () => {
    const { id } = useParams()
    const history = useHistory()
     console.log(id)
    const {single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct} = useProductsContext()
    
    useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    
        
    }, [id])

    

    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push("/")

            },3000)

        }
        
        
        
    }, [])

    if(loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorPage />
    }

    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;

    return (
        <Wrapper>
            <PageHero product title={name} />
            <div className="section section-center page">
                <Link to="/products" className="btn">Back to Products</Link>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content">
                        <h2>{name}</h2>
                        
                        <h5 className="price">{formatPrice(price)}</h5>
                        <p className="description">{description}</p>
                        <p className="info">
                            <span> Available: </span>
                            {stock > 0 ? "in stock" : "out of stock"}
                        </p>
                        <p className="info">
                            <span> Sku: </span>
                            {sku}
                        </p>
                        <p className="info">
                            <span> Brand: </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={product} />}
                    </section>
                </div>
            </div>


        </Wrapper>
    )
}

const Wrapper = styled.main`


.product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
}

.price {
   
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }

`

export default SingleProductPage
