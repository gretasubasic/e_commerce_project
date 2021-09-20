import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'


const ErrorPage = () => {
    return (
        <Wrapper>
        <div className="page-100">

            <div className="title">
            <h1>404 PAGE NOT FOUND</h1>
           
            </div>

            <div className="button-container">
                <Link to="/" className="btn">BACK HOME</Link>
            </div>
            
           

           
            
        </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
background: #ffffff;

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
    margin-top: 4rem;
}



.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}

@media (max-width: 658px) {
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 30px;
    }
}

`

export default ErrorPage
