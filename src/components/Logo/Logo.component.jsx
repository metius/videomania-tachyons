import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.styles.scss';

const Logo = () => {
  return(
    <Link to='/'>
      <h1 className='logo'>VideoMania</h1>
    </Link>
  )
}

export default Logo;