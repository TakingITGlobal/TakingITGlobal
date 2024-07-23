import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

const ProgressBar = ({progress, label, id}) => {
  return (
    <div className='progressBar'>
      <label htmlFor={`${id}-bar`}>{label} ({progress}%)</label>
      <progress
        id={`${id}-bar`}
        className='progressBar'
        aria-label={label}
        value={progress}
        aria-valuemin='0'
        aria-valuenow={progress}
        aria-valuemax='100'
        max='100'
      >
    </progress>
    </div>
  )
}
export const DataBars = ({ slice }) => {
  return (
    <section className="DataBars">
      <div className="Container">
        <h2>
          {/* {title} */}
          Foo - Data Bars
        </h2>
        <div className='progressColumns'>
          <div className='column'>
            <h3>Donations 
            $10,000,000</h3>
            <ProgressBar id='1' progress='50' label='Personal'/>
            <ProgressBar id='2' progress='75' label='Corporate'/>
          </div>
          <div className='column'>
            <h3>Expense by program area</h3>
            <ProgressBar id='1' progress='50' label='Personal'/>
            <ProgressBar id='2' progress='75' label='Corporate'/>
          </div>
          <div className='column'>
            <h3>Program Investment
            $9,000,000</h3>
            <ProgressBar id='1' progress='50' label='Personal'/>
            <ProgressBar id='2' progress='75' label='Corporate'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyDataBars on PrismicPageDataBodyDataBars {
    id
  }
`
