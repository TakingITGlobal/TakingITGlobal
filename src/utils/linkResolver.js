const { defaultLanguage } = require('../../prismic-configuration')

/**
 * The Link Resolver used for the Prismic repository. This function converts a
 * Prismic document to a URL within your app. It is used throughout your app to
 * resolve document links and support editor previews.
 *
 * {@link https://prismic.io/docs/technologies/link-resolver-gatsby}
 *
 * @param doc Prismic document to resolve to a URL within your app.
 *
 * @returns URL for the provided Prismic document.
 *
 * @type import('@prismicio/helpers').LinkResolverFunction
 */
exports.linkResolver = (doc) => {
  const lang = doc.lang.slice(0,2);
  switch (doc.type) {
    case 'homepage': {
      return `/${lang}`
    }
    case 'page': {
      return `/${lang}/${doc.uid}`
    }
    default:
      return '/en'
  }
}
