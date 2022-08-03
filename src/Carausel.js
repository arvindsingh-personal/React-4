import React from 'react'
import './carausel.css'
import { useState } from 'react';
import Products from './Products';

export default function Carausel() {
  const [imgurl, changeURL] = useState('images/carausel1.jpg');

  var images = ['carausel2.jpg', 'carausel3.jpg', 'carausel4.jpg', 'carausel5.jpg', 'carausel6.jpg'], x = 0;
  const changeImage = () => {
    // alert();
    // var img = document.getElementById("img");
    changeURL("images/" + images[x]);
    x++;

    if (x >= images.length) {
      x = 0;
    }
    var timerid = setInterval(changeImage, 2000);
  }

  return (
    <div className='carausel'>

      <img id="img" src={imgurl} />
      <div id='left' onClick={changeImage}><i class="fa-solid fa-chevron-left"></i></div>
      <div id='right' onClick={changeImage}><i class="fa-solid fa-chevron-right"></i></div>
      <div className='below-images'>
        <div className='img1'><img src='images/below1.png' /></div>
        <div className='img2'><img src='images/below2.png' /></div>
        <div className='img3'><img src='images/below3.png' /></div>
      </div>
      <Products />
    </div>
  )

}
