import React from 'react';

const NavSearchBar = () => { ///need to "bind" to search method bla bla bla --> state
  return(
    <>
      {/* <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label> */}
      <input id="name" class="input-reset ba b--black-20 pa2 db br2" type="text" aria-describedby="name-desc" placeholder='Search a movie or tv-show...'></input>
    </>
  )
}

export default NavSearchBar;