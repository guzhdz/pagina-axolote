import React from 'react';
import './_parallax.scss';
import './parallax.js';
import bird1 from './images/bird1.png';
import bird2 from './images/bird2.png';
import forest from './images/forest.png';
import rocks from './images/rocks.png';
import water from './images/water.png';
import ajolote from './images/ajolote.png';
 
const Parallax = () => (
    
<div className='cont-parallax'>
 
<section className="section">
<h2 id="text"><span>Soluciones modernas, ideas innovadoras</span><br/>AXOLTL LABS</h2>
<img src={bird1} id="bird1" className="vectores"/>
<img src={bird2} id="bird2" className="vectores"/>
<img src={forest} id="forest" className="vectores"/>
<img src={rocks} id="rocks" className="vectores"/>
<img src={water} id="water" className="vectores"/>
<img src={ajolote} className="ajolote" id="ajolote"/>
</section>

</div>
 
);
 
export default Parallax;
