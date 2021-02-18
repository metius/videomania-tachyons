import React from 'react';
import {Link} from 'react-router-dom';
// import './Logo.styles.scss';

const Logo = () => {
  return(
    <Link to='/'>
      <h1 className='link white-70 b f2 f2-ns dib mr3 hover-white'>VideoMania</h1>
    </Link>
  )
}

export default Logo;