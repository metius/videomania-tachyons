import React from 'react';
import Logo from '../Logo/Logo.component';
import NavLinks from '../NavLinks/NavLinks.component';
import SearchBar from '../SearchBar/SearchBar.component';
import './NavBar.styles.scss';

const NavBar = () => {
  return(
    <nav>
      <NavLinks />
      <Logo />  
      <SearchBar />
    </nav>
  )
}

export default NavBar;