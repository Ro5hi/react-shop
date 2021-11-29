import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
// import Products from './components/Products';
// import { productData, productDataTwo } from './components/Products/data';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
        <Hero />
          {/* <Products heading='Choose yours' data={productData} />
          <Products heading='Customize it' data={productDataTwo} /> */}
        <Footer />
    </Router>
  );
}


export default App;
