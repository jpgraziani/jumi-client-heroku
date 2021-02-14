import React, {Component} from 'react';
import Title from './Title';
import {FaBabyCarriage, FaHandHoldingHeart, FaFish, FaBook} from "react-icons/fa";
import './Services.css';

class Services extends Component {
  state = {
    service: [
      {
        icon: <FaBabyCarriage />,
        title: 'baby food/toddler',
        info: 'We are currently exploring new foods for our child so we are always updating our site with new ideas.',
        id: 's1'
      },
      {
        icon: <FaHandHoldingHeart />,
        title: 'healthy lifestyle',
        info: 'We beleive in eating well and exercise can help give a happy healthy lifestyle. Look good, feel good.',
        id: 's2'
      },
      {
        icon: <FaFish />,
        title: 'recipes we make daily',
        info: 'We are a new family learning the way around the kitchen, so we make sure our recipes are easy peasy to cook.',
        id: 's3'
      },
      {
        icon: <FaBook />,
        title: 'education',
        info: 'We believe a continued healthy lifestyle comes from knowledge so we are here to share our findings on this journey.',
        id: 's4'
      }
    ]
  }

  render() {
   return (
    <section className='services'>
      <Title title='about' className='title-about' />
      <div className='services-center'>
        {this.state.service.map((item, id) => {
          return <article key={id} className='service'>
          <span>{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.info}</p>
          </article>
        })}
      </div>
    </section>
   );
  }
}

export default Services;