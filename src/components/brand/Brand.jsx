import React from 'react';
import {img1,img2,img3,img4,img5,google} from './imports';
import './brand.css';

const Brand = () => (
  <div className="ai_brand">
    <div className='img1'>
      <img src={img1} />
    </div>
    <div className='img2'>
      <img src={img2} />
    </div>
    <div className='img3'>
      <img src={img3} />
    </div>
    <div className='img4'>
      <img src={img4} />
    </div>
    <div className='img5'>
      <img src={img5} />
    </div>
  </div>
);

export default Brand;