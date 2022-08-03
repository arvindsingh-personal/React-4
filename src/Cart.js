import React, { memo } from 'react'
import { useContext } from 'react'
import { cartContext } from './App';
import './Cart.css'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function Cart() {
  let { cart, changeCart, prod_array, updateArray } = useContext(cartContext);
  let total = 0;

  const emptyCart = () => {
    updateArray([]);
    changeCart(0);
  }

  const increase = (Index) => {
    let subtotal;
    let arr = [...prod_array]
    arr[Index].quantity += 1;
    arr[Index].subtotal = arr[Index].price * arr[Index].quantity
    updateArray(arr);
  }

  const decrease = (Index) => {
    let arr = [...prod_array]
    if (arr[Index].quantity <= 1) {
      arr.splice(Index, 1);
      changeCart(cart => cart - 1)
    }
    else {
      arr[Index].quantity -= 1;
      arr[Index].subtotal = arr[Index].price * arr[Index].quantity;
    }
    updateArray(arr);
  }

  if (cart === 0) {
    return (
      <div className='Empty_Cart'>
        <div className='Cart'>
          <div className='div1'>
          <i class="fa-solid fa-dog"></i>
          </div>
          <div className='div2'>
            <h1 style={{ color: 'black' }}>Oops! Your Amazon Cart is Empty 
            </h1>
          </div>
          <div className='div3'><NavLink to='/'>SHOP NOW</NavLink></div>
        </div>
      </div>
    )
  }

  if (cart !== 0) {
    return (
      <>
      <div className='main'>
        <div className='section1'>
          <div className='head'><h1>Shopping Cart</h1></div>
          {prod_array.map((item, index) => (
            <div className='item'>
              <hr />
              <div className='descrip'>
                <div className='part1'><p><img src={item.image} /></p></div>
                <div className='part2'>
                  <p id='para1'>{item.name}</p>
                  <p id='para2'>In Stock</p>
                  <p id='para3'>Eligible for FREE Shipping</p>
                  <p id='para4'><img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' /></p>
                  <p>
                    <button onClick={() => increase(index)}>+</button> <span>{item.quantity} </span>
                    <button onClick={() => decrease(index)}>-</button>
                  </p>
                </div>
                <div className='part3'><p><span>₹</span>{item.price}</p></div>
              </div>
            </div>
          ))}


        </div>

        <div className='section2'>
          <div className='part1'>
            <div id='div1'><p><i class="fa-solid fa-circle-check"></i></p></div>
            <div id='div2'>
              <p style={{ color: '#067D62', marginBottom: '0', fontSize: '1.3vw' }}>Your order is eligible for FREE Delivery.</p>
              <p style={{ color: 'gray', marginTop: '0', fontSize: '1.3vw' }}>Select this option at checkout. Details</p>
            </div>
          </div>
          <div className='part2'>
            <p style={{ fontSize: '1.9vw', fontWeight: '600', marginBottom: '0' }}>Subtotal ( {cart} items):
              {prod_array.map(item => {
                total += parseInt(item.subtotal)
              })} {total}
            </p>
            <p style={{ fontSize: '1.4vw', marginTop: '0' }}>This order contains a gift</p>
            <button >Proceed to Buy</button>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
 
}

export default memo(Cart);