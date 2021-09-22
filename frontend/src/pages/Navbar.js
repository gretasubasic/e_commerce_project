import { FaBars } from "react-icons/fa"
import { links } from "../data"
import styled from "styled-components"
import logo from "../logo.svg"
import { Link } from 'react-router-dom'
import unwind from "../UNWIND.svg"
import CartButtons from "./CartButtons"
import {useProductsContext} from "../context/products-context"
import { useUserContext } from "../context/user_context"






import React from 'react'


const Navbar = () => {
    const { openSidebar, closeSidebar } = useProductsContext()
    const { myUser } = useUserContext();

    
    return (
        <NavWrapper>
        <div>
           

            
            <nav className="nav-style">
                <button className="nav-toggle">
                    <FaBars className="fa-bars" onClick={openSidebar} />
                </button>

                <Link to="/"><img src={unwind} alt="logo" /></Link>

                

                <ul className="navigation">
                    {links.map((link) => {
                        const {id, text, url} = link;
                        return <li key={id}>
                            <Link to={url}>{text}</Link>

                        </li>
                    })}
                    
                {myUser && (
                <li><Link to="checkout" onClick={closeSidebar}>Checkout</Link></li> )
                }
                <CartButtons />
                </ul>
                
              

               


                
            </nav>
            
                

        </div>
        </NavWrapper>
    )
}


const NavWrapper = styled.div`
background-color: #ffffff;


.nav-style {
width: auto;
height: 5rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

}

ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0px 20px;
    background-color: none;
    
}

.link {
    margin: 0 0.5rem;
    &:hover{
        background: none;
    }
   
}

a {
    font-size: 0.9rem;
    color: black;
    text-decoration: none;
    margin: 2rem;
    letter-spacing: 2px;
    font-size: 16px;
    
    &:hover {
        border-bottom: 1px solid black;
        
        
        
        
    }
}

.nav-toggle {
    background: transparent;
    border: transparent;
    color: #1e1e1e;
    cursor: pointer;
    &:hover {
        color: #1e1e1e;
    }
   
    }

    .fa-bars {
        display: none;
    }

   

   
    svg {
   
      display: flex;
      margin-right: -300px
      
      
}

button {
    background: transparent;
    width: 2rem;
}



@media (max-width: 676px) {
    img {

    }


    ul {
        display: none;
    }

    .fa-bars {
        margin-left: 1rem;
        font-size: 2rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;

    }

  

    .nav-style {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem;
    }

    img {
        height: 30px;
        margin-left: 20px;
        margin-top: 6px;
        
    }

 
}
`

export default Navbar
