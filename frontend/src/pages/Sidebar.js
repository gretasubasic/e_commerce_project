import React from 'react'
import unwind from "../UNWIND.svg"
import { FaTimes } from "react-icons/fa"
import styled from 'styled-components'
import { links } from '../data'
import { useProductsContext } from "../context/products-context"
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'



const Sidebar = () => {

    const {isSidebarOpen, closeSidebar } = useProductsContext()
    const { myUser } = useUserContext();
    return (
        <SideBarWrapper>
        <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
            <div className="sidebar-header">
                <img src={unwind} className="logo" alt="logo" />
                <button className="close-btn" type="button" onClick={closeSidebar}><FaTimes /></button>
            </div>

            <ul className="links">
                    {links.map((link) => {
                        const {id, text, url} = link;
                        return <li key={id}>
                         <Link to={url} className="links" onClick={closeSidebar}>{text}</Link>
                         </li>
                    })}
                      {myUser && (
                <li><Link to="checkout" onClick={closeSidebar}>Checkout</Link></li> )
                }
                    <CartButtons />
                </ul>

        </div>
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`

text-align: center;

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }




.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e5e5e7;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: blueviolet;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;

    

}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  
}

.show-sidebar {
  transform: translate(0);
  z-index: 999;

}

.close-btn {
  font-size: 1.75rem;
  background: transparent;
  border-color: transparent;
  color: red;
  transition: all 0.3s linear;
  cursor: pointer;
  color: #181818;
  margin-top: 0.2rem;
}
.close-btn:hover {
  color: red;
}
.logo {
  justify-self: center;
  height: 40px;
}

.links {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
   
  
  }

/* a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: white;
   
  } */

ul {
    list-style: none;
}

/* a {
    color: black;
    text-decoration: none;
    &:hover {
      color: black;
    } 
} */



@media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }

  
}
`

export default Sidebar
