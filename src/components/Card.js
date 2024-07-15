import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './_card.scss'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

export const Card = ({ title, description, linkText, linkUrl, image }) => {
  const cardImage = getImage(image.gatsbyImageData)

  return (
    <div className="cardContainer">
      <div className="imgWrap">
        {cardImage && <GatsbyImage image={cardImage} alt={image.alt} />}
      </div>
      <div className="cardText">
        <div className="titleText">
          <PrismicRichText field={title.richText} />
        </div>

        <PrismicRichText field={description.richText} />

        <div className="links">
          <PrismicLink href={linkUrl.url}>
            <PrismicRichText field={linkText.richText} />
          </PrismicLink>
          <HiArrowRight />
        </div>
      </div>
    </div>
  )
}
