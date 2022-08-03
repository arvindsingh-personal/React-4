import React from 'react'
import './data'
import Footer from './Footer';
import './product.css'
import { useContext } from 'react';
import { cartContext } from './App';
const data = require("./data.json");


export default function Products() {
  const products = data.products;
  let { changeCart, prod_array , updateArray } = useContext(cartContext);

  let Index;
  const addCart = (ID) => {
    let flag = 1;
    if (prod_array.length > 0) {
      prod_array.map((item, index) => {
        if (item.id === ID) {
          flag = 0;
          Index = index;
        }
      })
    }

    if (flag === 1) {
      updateArray(currentArray => [...currentArray, products[ID - 1]]);
      changeCart(cart => cart + 1);
    }
    else {
      prod_array[Index].quantity += 1;
    }

    console.log(prod_array);
  }

  return (
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
    <div className='product'>
     {products.map(item => (
      <div className='item'>
      <p><img alt='' src={item.image}/></p>
      <p className='para'>
      <p className='name'>{item.name}</p>
      <p><span style={{textDecoration:'line-through',fontSize:'1vw',color:"gray"}}>₹ {item.oldprice}</span> ₹ {item.price}</p>
      </p>
      <button onClick={() => addCart(item.id)}>Add to Cart</button>
      </div>
     ))
     }
    </div>
    <div class="rhf-divider-no-gradient"></div>
    <Footer />
    </div>
  )
}
