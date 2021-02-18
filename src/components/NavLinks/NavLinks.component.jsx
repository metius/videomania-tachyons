import React from 'react';
import {Link} from 'react-router-dom';
// import './NavLinks.styles.scss';

const NavLinks = () => { 
  // <span className="link dim white-70 f5 f5-ns dib mr3" title="Home">Movies</span>
  
  return(
    <>
      <Link to='/'>
        <span className="f4 fw4 hover-white no-underline white-70 dn dib-ns mr3 pt2" title="Home">Movies</span>
      </Link>
      <Link to='/'>
        <span className="f4 fw4 hover-white no-underline white-70 dn dib-ns mr3 pt2" title="About">TV-Shows</span>
      </Link>
      <Link to='/'>
        <span className="f4 fw4 hover-white no-underline white-70 dn dib-ns mr3 pt2" title="Store">People</span>
      </Link>
      <Link to='/'>
        <span className="f4 fw4 hover-white no-underline white-70 dn dib-ns pt2" title="Contact">Contact</span>
      </Link>
    </>
  )
}

export default NavLinks;