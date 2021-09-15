import React from 'react';
import List from '../../components/card/card-list.jsx';
import './_services.scss';
import './services.js';

const Services = () => (
    <div className='cont-services'>
      <div className="slider-container">
      <div className="slider-control left inactive"></div>
      <div className="slider-control right"></div>
      <ul className="slider-pagi"></ul>
        <div className="slider">
            <List />
        </div>
      </div>
    </div>
);

export default Services;