import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData, productDataTwo } from './components/Products/data';
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App({ children, title }) {

  const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

  return (
    <Router>
        <Hero />
          <Products heading='Choose yours' data={productData} />
          <Featured />
          <Products heading='Accessories' data={productDataTwo} />
          <Elements stripe={stripePromise}>{children}</Elements>
        <Footer />
    </Router>
  );
}


export default App;