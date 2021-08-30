import React from 'react';
import './_home.scss';
import axolote from './images/ajolote.png';

const Home = () => (
<div className='cont-home'>

<div class="landscape">

  <div class="mountain"></div>
  <div class="mountain mountain-2"></div>
  <div class="mountain mountain-3"></div>
  <div class="sun-container sun-container-1">
  </div>
  <div class="sun-container">
    <div class="sun"></div>
  </div>
  <div class="cloud"></div>
  <div class="cloud cloud-1"></div>
  <div class="sun-container sun-container-reflection">
    <div class="sun"></div>
  </div>
  <div class="light"></div>
  <div class="light light-1"></div>
  <div class="light light-2"></div>
  <div class="light light-3"></div>
  <div class="light light-4"></div>
  <div class="light light-5"></div>
  <div class="light light-6"></div>
  <div class="light light-7"></div>
  <div class="water"></div>
  <div class="splash"></div>
  <div class="splash delay-1"></div>
  <div class="splash delay-2"></div>
  <div class="splash splash-4 delay-2"></div>
  <div class="splash splash-4 delay-3"></div>
  <div class="splash splash-4 delay-4"></div>
  <div class="splash splash-stone delay-3"></div>
  <div class="splash splash-stone splash-4"></div>
  <div class="splash splash-stone splash-5"></div>
  <div class="lotus lotus-1"></div>
  <div class="lotus lotus-2"><img src={axolote} class="axolote" /></div>
  <div class="lotus lotus-3">
  </div>
  <div class="front">
    <div class="stone"></div>
    <div class="grass"></div>
    <div class="grass grass-1"></div>
    <div class="grass grass-2"></div>
    <div class="reed"></div>
    <div class="reed reed-1"></div>
  </div>
  <p class="titulo">AXOLOTL LABS</p>
</div>

</div>
);

export default Home;