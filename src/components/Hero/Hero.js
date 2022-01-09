import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroStyles';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Nav toggle={toggle} />
      <Cart isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Built for the metaverse.</HeroH1>
          <HeroP>Made for Immersion.</HeroP>
          <HeroBtn>Order Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;