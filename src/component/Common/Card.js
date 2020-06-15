import React from 'react';
import 'tachyons';
import './style.css';
const Card = ({name, img}) => {
  return(
    <div className='bg-white-90 dib br3 pa1 ma2 grow bw2 shadow-5'>
      <div className='tc leftSide'>
        <img alt='roboImage'  src={img}/>
          <div>
          <h2>{name}</h2>
          </div>
      </div>
    </div>
  );
};
export default Card;
