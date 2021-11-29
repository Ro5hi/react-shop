import React from 'react';
import { Navbar, NavLink, NavIcon, Bars } from './NavStyles';

const NavMenu = ({ toggle }) => {
  return (
    <>
      <Navbar>
        <NavLink to='/'>Inno</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Navbar>
    </>
  );
};

export default NavMenu;