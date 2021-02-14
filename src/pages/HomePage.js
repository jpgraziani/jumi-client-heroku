import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Banner from '../components/Banner';
import Hero from '../components/Hero';

import Services from '../components/Services';

const Home = () => {
  return(
    <Fragment>
      <Hero hero='defaultHero'>
        <Banner title='easy peasy recipes'>
          <Link to='./recipes' className='btn-primary' alt='discover recipes'>discover recipes</Link>
        </Banner>
      </Hero>
      <Services />
    </Fragment>
  );
}

export default Home;