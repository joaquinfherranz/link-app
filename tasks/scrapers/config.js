const {
  freecodecamp: freecodecampDownloader,
  javascriptkicks: javascriptkicksDownloader
} = require('../downloaders')

module.exports = {
  freecodecamp: {
    downloader: freecodecampDownloader,
    selector: 'h2.post-card-title > a[href]',
    home: 'https://www.freecodecamp.org'
  },
  javascriptkicks: {
    downloader: javascriptkicksDownloader,
    selector: 'h2.story-title > a[href]',
    home: 'https://javascriptkicks.com'
  }
}
