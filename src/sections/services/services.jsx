import React from 'react';
import List from '../../components/card/card-list.jsx';
import './_services.scss';
import './services.js';

const Services = () => (
    <div className='cont-services'>
      <div class="slider-container">
      <div class="slider-control left inactive"></div>
      <div class="slider-control right"></div>
      <ul class="slider-pagi"></ul>
        <div class="slider">
            <List />
        </div>
      </div>
    </div>
);

export default Services;