# wintr-amazon-scraper


[![Build status](https://gitlab.com/121593/wintr-amazon-scraper/badges/master/pipeline.svg)](https://gitlab.com/121593/wintr-amazon-scraper/pipelines)
[![npm version](https://badge.fury.io/js/wintr-amazon-scraper.svg)](https://badge.fury.io/js/wintr-amazon-scraper)
[![Dependencies](https://david-dm.org/121593/wintr-amazon-scraper.svg)](https://david-dm.org/121593/wintr-amazon-scraper)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

This package aims to make Amazon marketplace products data retrieval easy, using [wintr service](https://wintr.com)  and its [unofficial wrapper](https://gitlab.com/121593/wintr) alongside with [amazon-url-builder](https://gitlab.com/121593/amazon-url-builder)

It basically wraps Wintr and AmazonUrlBuilder together, exposing methods to scrap typical Amazon pages

## Installation
`npm i wintr-amazon-scraper`

## Usage

### Instantiation

```ecmascript 6
const w = new WintrAmazonScraper(options)
```
Where options are passed directly to Wintr ([details here](https://github.com/121593/wintr#options))

### Scraping
Four methods are available for now :

- `getByProductId(id, options)` which returns parsed product information
  
- `getByQuery(searchTerm, options, rh)` which returns items found when asking for `searchTerm`. Can be narrow to a category using `rh` Amazon param

- `getByNodeId(id, options)` which returns items found in "Node" page

- `getBestSellersByNodeSlug(nodeSlug, options)` which returns items found in "Category BestSellers" page formatted as
  
When the result is split in various pages, a link for the next page is returned with the data

## Development
Tests and examples are not included in the Npm release to keep it lightweight.
Use the repository for development

### Example
An example application is included. Run it with : 

`npm run dev`

### Contributing
Issue reports, pull requests, suggestions and comments are very welcome !

Please keep in mind that this repo use [commitizen](https://github.com/commitizen/cz-cli) -style commit messages and follow js [standard](https://standardjs.com/)'s style
