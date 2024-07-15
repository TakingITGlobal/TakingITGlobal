import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { HiArrowRight } from 'react-icons/hi'

export const Card = ({
  title,
  description,
  linkText,
  linkUrl,
  image,
  auditLinkText,
  auditLinkUrl,
}) => {
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
          {auditLinkText?.richText && auditLinkUrl?.url && (
            <div className="auditLink">
              <PrismicLink href={auditLinkUrl?.url}>
                <PrismicRichText field={auditLinkText?.richText} />
              </PrismicLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
