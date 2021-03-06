const { constants } = require('wintr')

/**
 * Wintr output schema for category bestsellers page
 */
const extractionSchemaForCategoryBestSellerPage = {
  hasNextPage: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: 'body',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: {
      link: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-pagination .a-selected + .a-normal a',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
      }
    }
  },
  items: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.a-list-item',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: {
      title: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: 'img:first-of-type',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'alt',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      price: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-color-price span',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*'
      },
      // @todo: Image source does not get extracted correctly.
      //  Possibly lazy-load & cache related. Should be inspected deeper as it had worked sometimes
      image: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: 'img:first-of-type',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'src'
      },
      rating: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-icon-alt',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CONTAIN]: 'out of 5 stars',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.FILTER_EMPTY_STRINGS]: true,
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_REPLACER]: [
          {
            [constants.OUTPUT_SCHEMA_REPLACER.SEARCH]: ' out of 5 stars',
            [constants.OUTPUT_SCHEMA_REPLACER.REPLACE_BY]: ''
          }
        ],
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TO_NUMBER
        ]
      },
      link: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.zg-item > a',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
      }
    }
  }
}

module.exports = { extractionSchemaForCategoryBestSellerPage }
