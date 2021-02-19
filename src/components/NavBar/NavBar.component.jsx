import React from 'react';
import Logo from '../Logo/Logo.component';
import NavLinks from '../NavLinks/NavLinks.component';
import NavSearchBar from '../NavSearchBar/NavSearchBar.component';
import NavSignInSignOut from '../NavSignInSignOut/NavSignInSignOut.component';
// import './NavBar.styles.scss';

const NavBar = () => {
  return(
    <nav className="pa3 pa3-ns flex justify-between ">
      <div className="no-underline flex items-center pa3">
        <Logo />
        <NavLinks /> 
      </div>

      <div className="flex-grow pa3 flex items-center">
        <NavSignInSignOut />
        <NavSearchBar />
      </div>
    </nav>
  )
}

export default NavBar;