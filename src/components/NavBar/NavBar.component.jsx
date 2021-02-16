import React from 'react';
import Logo from '../Logo/Logo.component';
import NavLinks from '../NavLinks/NavLinks.component';
import SearchBar from '../SearchBar/SearchBar.component';
// import './NavBar.styles.scss';

const NavBar = () => {
  return(
    <nav className="pa3 pa4-ns flex justify-between bb b--white-10">
      <div className="no-underline flex items-center pa3">
        <a className="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Site Name</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Movies</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">TV-Shows</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">People</a>
        <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">Contact</a>
      </div>

      <div class="flex-grow pa3 flex items-center">
        <a class="link dim gray    f6 f5-ns dib mr3" href="#0">About</a>
        {/* I will need to render: 
          - SIGN IN/SIGN UP if not logged in 
          - SIGN OUT or something else in case logged in
          - also a link to profile 
        */}
        <a class="link dim gray    f6 f5-ns dib mr3" href="#0">Sign In</a> 
        {/* <a class="f6 dib black bg-animate hover-bg-black no-underline pv2 ph4 br-pill ba b--black-20" href="#0">Sign Up</a> */}
      </div>
    </nav>
    // <nav>
    //   <NavLinks />
    //   <Logo />  
    //   <SearchBar />
    // </nav>
  )
}

export default NavBar;