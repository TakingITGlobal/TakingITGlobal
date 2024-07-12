import * as React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

export const Card = ({}) => {
  return (
    <div className="cardContainer">
      <div className="imgWrap">
        <img src="https://placehold.co/400" />
      </div>
      <div className="cardText">
        <h4>title</h4>
        <p>
          description fioeshoisefjo fiej foisj oi fosf so fnoise fnoesifn
          esonfeoi fnoin osen
        </p>
        <a>link text</a>
      </div>
    </div>
  )
}
