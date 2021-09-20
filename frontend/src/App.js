import {Home, ErrorPage, AboutPage, Navbar, Sidebar, PageHero, Checkout, HomePage, Product, FeaturedProducts, SingleProductPage,
ProductsPage, 
CartPage, CheckoutPage, PrivateRoute, Footer} from "./pages";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";





function App() {
  return (
    <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/about'>
        <AboutPage />
      </Route>
      
      <Route exact path='/products'>
        <ProductsPage />
      </Route>
      <Route path='/products/:id' children={<SingleProductPage />} />

      <Route path='/cart'>
        <CartPage />
      </Route>

      <PrivateRoute path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
      <Route path='*'>
        <ErrorPage />
      </Route>
    </Switch>
    <Footer />
    
  </Router>
  
  );
}

export default App;
