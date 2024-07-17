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
  tagText,
  auditLinkText,
  auditLinkUrl,
}) => {
  const cardImage = getImage(image.gatsbyImageData)

  return (
    <div className="cardContainer">
      <div className="imgWrap">
        {cardImage && <GatsbyImage image={cardImage} alt={image.alt} />}
        <PrismicRichText field={tagText.richText} />
      </div>
      <div className="cardText">
        <div className="titleText">
          <PrismicRichText field={title.richText} />
        </div>

        <PrismicRichText field={description.richText} />

        <div className="links">
          <PrismicLink href={linkUrl.url}>{linkText}</PrismicLink>
          <HiArrowRight />
          {auditLinkText && auditLinkUrl?.url && (
            <div className="auditLink">
              <PrismicLink href={auditLinkUrl?.url}>
                {auditLinkText}
              </PrismicLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
