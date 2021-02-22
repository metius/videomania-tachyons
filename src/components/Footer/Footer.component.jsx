import React from 'react';

const Footer = () => {
  return(
    <footer className="pv4 ph3 ph5-m ph6-l bg-black light-gray">
      <small className="f6 db tc">© {new Date().getFullYear()} <b className="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
      <div className="tc mt3">
        <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
        <a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
        <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
      </div>
    </footer>


  )
}

export default Footer;