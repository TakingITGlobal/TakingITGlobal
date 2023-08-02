const path = require('path')
const dotenv = require('dotenv').config()

const prismicConfig = require('./prismic-configuration')

module.exports = {
  siteMetadata: {
    title: 'TakingITGlobal - Inspire. Inform. Involve.',
    description: 'At TakingITGlobal, we design and deliver youth engagement programs that empower youth to understand and act on local and global challenges.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicConfig.prismicRepo,  
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TakingITGlobal',
        short_name: 'TIG',
        start_url: '/en',
        background_color: '#EACF60',
        theme_color: '#EACF60',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // @risingyouthtig
        username: `17841401539124196`,
        instagram_id: `17841401539124196`,
        maxPosts: 20,
        access_token:process.env.INSTAGRAM_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@TakingITGlobal`
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://stories.tigweb.org/feed`,
        name: `TakingITGlobal`,
        parserOption: {
          customFields: {
            item: ['title', 'link', 'content:encoded']
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8G0985VPTC",
          "G-CW938ZN47N",
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(__dirname, 'src', 'images'),
      },
    },
  ],
}
