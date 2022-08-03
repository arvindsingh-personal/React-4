import { textAlign } from '@mui/system'
import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import { cartContext } from './App';
import { useContext } from 'react';

export default function Header() {
  let { cart } = useContext(cartContext);
  return (
    <>
      <div className='navbar'>
        <div className='part1'>
          <p> <img src='images/amazon1.png' /></p>
        </div>
        <div className='part2'>
          <div className='div1'>
            <p><i class="fa-solid fa-location-dot"></i> </p>
          </div>
          <div className='div2'>
            <p className='para1'> Hello</p>
            <p className='para2'> Select your address</p>
          </div>
        </div>
        <div className='search-container part3'>
          <form action="/action_page.php">
            <input type="text" name="search" />
            <button><i class="fa fa-search"></i></button>
          </form>
        </div>
        <div className='part4'>
          <img src='images/Flag.ico' />
          <select ></select>
        </div>
        <div className='part5'>
          <p className='para1'>Hello, Sing in</p>
          <p className='para2'>Account & Lists <select></select></p>
        </div>
        <div className='part6'>
          <p className='para1'>Returns</p>
          <p className='para2'> & Orders</p>
        </div>
        <div className='part7'>
          <nav>
            <NavLink to='/cart' className='basket'>
              <p><i class="fa-solid fa-cart-plus"></i>
              <span>{cart}</span></p>
            </NavLink>
          </nav>

        </div>
      </div>

      <div className='navbar2'>
        <div className='part1'>
          <div style={{ fontSize: '1.5vw', fontWeight: 'bold' }}><i class="fa-solid fa-bars" style={{ fontSize: '1.7vw' }}></i> All</div>
          <div>Best Sellers</div>
          <div>Today's Deals</div>
          <div>Mobiles</div>
          <div>Customer Service</div>
          <div>Books</div>
        </div>
        <div className='part2'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/FT_SWM_400x39_211._CB623007921_.jpg' />
        </div>
      </div>
    </>
  )
}
