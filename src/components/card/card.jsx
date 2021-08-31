import React from 'react'

const Card = ({service, description, link, number, text, img, backimg}) => (
  <div class={`skw-page skw-page-${ number } active`}>
    <div id={`${ link }`} />
    <div class={`skw-page__half skw-page__half--${ img }`} style={{ backgroundImage: `url(${ backimg })`}}>
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
    <div class={`skw-page__half skw-page__half--${ text }`}>
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading">{ service }</h2>
          <p class="skw-page__description">{ description }</p>
        </div>
      </div>
    </div>
  </div>
)

export default Card