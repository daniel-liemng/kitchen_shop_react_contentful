import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Cart,
  Checkout,
  Products,
  SingleProduct,
  Error,
} from "./pages";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={SingleProduct} />
        <Route exact path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
