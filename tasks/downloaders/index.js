const got = require('got')

const download = (url) => () => got(url).then(response => response.body)

module.exports = {
  freecodecamp: download('https://www.freecodecamp.org/news/'),
  javascriptkicks: download('https://javascriptkicks.com/stories')
}
