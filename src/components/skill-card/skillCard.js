import React from 'react';
import skillsArr from './skillArr';
import './skillCard.scss';


const skillCard = () => (
    <div className='container'>
      {skillsArr.map(
        item =>(
          <div className='card d-flex'>
            <img src={item.image} alt="" srcset="" />
            <h1>{item.skill}</h1>
          </div>))}   
    </div>
  );


export default skillCard
