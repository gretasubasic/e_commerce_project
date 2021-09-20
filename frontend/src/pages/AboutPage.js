import React from 'react'
import styled from 'styled-components'
import furnitureImg from "../images/about-furniture.jpg"
import PageHero  from './PageHero'

const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />

        <Wrapper className="page section section-center">
        
            <img src={furnitureImg} alt="" />
            <article>
                <div className="title">
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad sequi tenetur reprehenderit nihil, porro quidem quo accusantium corporis quaerat necessitatibus aperiam doloremque iusto natus est asperiores corrupti officia laborum.</p>
                </div>
            </article>
            </Wrapper>

            </main>

        
    )
}


const Wrapper = styled.div`

display: grid;
gap: 4rem;

img {
    width: 100%;
    display: block;
    height: 500px;
    object-fit: contain;
}

p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: black;
}



.title {
    
    text-align: left;

}

@media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`


export default AboutPage
