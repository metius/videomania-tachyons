import React from 'react';
import {Link} from 'react-router-dom';

const NavSignInSignOut = () => {
  {/* I will need to render: 
          - SIGN IN/SIGN UP if not logged in 
          - SIGN OUT or something else in case logged in
          - also a link to profile (when signed in)
        */}
  return (
    <Link to='/sign-in'>
      <span class="f4 fw4 hover-white no-underline white-70 dn dib-ns mr3 pt2" href="#0">Sign In</span> 
    </Link>
  )
}

export default NavSignInSignOut;