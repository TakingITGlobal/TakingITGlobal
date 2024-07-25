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
      <div className="bg-blob" />
      <div className="Container">
        <h2>
          {slice.primary.title}
        </h2>
        <div className='progressColumns'>
          {slice.items.map((item, index) => (
              <div className='column' key={index}>
              <h3>{item.data_column.document.data.title}</h3>
              {item.data_column.document.data.progress_bars.map((bar, index) => (
                <ProgressBar id={bar.bar_title.toLowerCase().replace(/\s/g,'')} progress={bar.progress_percentage} label={bar.bar_title} key={index}/>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment FlexPageDataBodyDataBars on PrismicFlexPageDataBodyDataBars {
    id 
    primary {
      title
    }
    items {
      data_column {
        document {
          ...on PrismicFinancialData {
            data {
              title
              progress_bars {
                bar_title
                progress_percentage
              }
            }
          }
        }
      }
    }
  }
`
