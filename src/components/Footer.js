import React from 'react';
import './Footer.css';

import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <section className='footer-container'>
      <div className='nav-footer'>
        <Link className="footerLink" to='/'>home|</Link>
        <Link className="footerLink" to='/add-recipe'>add-recipe|</Link>
        <Link className="footerLink" to='/recipes'>recipes</Link>
      </div>
      <p className='end-quote'>exploring desert life on the west coast</p>
    </section>
  );
}

export default Footer;