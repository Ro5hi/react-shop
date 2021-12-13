import React from 'react';
import Checkout from '../Checkout/Checkout';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './CartStyles';

const Cart = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Products</SidebarLink>
        <SidebarLink to='/'>Featured</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute component={Checkout} to='/checkout'>Checkout</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Cart;