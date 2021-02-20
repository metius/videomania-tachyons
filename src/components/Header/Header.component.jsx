import React from 'react';
import NavBar from '../NavBar/NavBar.component';
import BgImg from '../../assets/images/header-bg.jpg'

const Header = () => {
  // https://tachyons.io/components/headers/startup-hero/index.html
  
  return(
    <header>
      <div className="cover bg-left bg-center-l" style={{backgroundImage: `url(${BgImg})`}}>
        <div className="bg-black-80 ">
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header;