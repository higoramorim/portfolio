import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Facebook from './pages/Facebook';
import MovieCard from './pages/MovieCard';
import ShopCart from './pages/ShopCart';
import Skills from './pages/Skills';


const App = () => {
  return(
  <BrowserRouter>
  <Switch>
      <Route path="/facebook" component={Facebook} />
      <Route path="/movie-card" component={MovieCard} />
      <Route path="/shop-cart" component={ShopCart} />
      <Route path="/skills" component={Skills} />
      <Route exact path="/" component={Home} />
  </Switch>
  </BrowserRouter>  
  )
}

export default App;
