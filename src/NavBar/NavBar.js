import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

import './navBar.css';

export default class Navbar extends Component {
  state={
    isOpen: false
  }

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/' className='logo-link'>
              <h1>jumi&dash</h1>
            </Link>
            <button 
              type='button' 
              className='nav-btn'
              value='nav button' 
              onClick={this.handleToggle}>
                <FaAlignRight className='nav-icon' />.
              </button>
              
              
          </div>
          <div className='links-container'>
            <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
              <li><Link to='/add-recipe' className='nav-path-link'>add-recipe</Link></li>
              <li><Link to='/recipes' className='nav-path-link'>recipes</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


