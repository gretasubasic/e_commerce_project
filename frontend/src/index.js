import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from "./context/products-context"
import { FilterProvider } from "./context/filter_context"
import { CartProvider } from "./context/cart_context"
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';







ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
    <ProductsProvider>
      <FilterProvider>
      <CartProvider>
        <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);