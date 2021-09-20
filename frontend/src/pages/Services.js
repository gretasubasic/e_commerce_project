import React from 'react'
import styled from 'styled-components'
import { services } from '../data'

const Services = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <article className="header">
                    <h3>Custom Furniture <br />
                    Built For You</h3>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolores sunt doloribus perferendis recusandae ipsa accusamus necessitatibus dolorum cupiditate, repellat quis.</p>
                </article>
                <div className="services-center">
                    {services.map((service) => {
                        const {id, icon, title, text} = service;
                        return <article key={id} className="service">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <p>{text}</p>

                        </article>
                    })}
                </div>
            </div>
            

        </Wrapper>
    )
}


const Wrapper = styled.div`




 h3,
  h4 {
    color: black;
    font-size: 36px;
    letter-spacing: 2px;
  }

  padding: 5rem 0;
  background: #e5e5e7;;
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: black;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #ffffff;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    margin-bottom: 4rem;
    

    p {
      color: black;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #e5e5e7;
    color: #1b1b1b
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }


`

export default Services
