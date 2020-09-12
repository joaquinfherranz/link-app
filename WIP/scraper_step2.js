const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])
const got = require('got')
const { writeFileSync } = require('fs')

const urls =
[
  'https://www.freecodecamp.org/news/mistakes-i-made-when-learning-to-code-and-how-to-avoid-them/',
  'https://www.freecodecamp.org/news/what-is-css-specificity/',
  'https://www.freecodecamp.org/news/understanding-recursion-in-javascript/',
  'https://www.freecodecamp.org/news/what-is-an-xml-file-how-to-open-xml-files-and-the-best-xml-viewers/',
  'https://www.freecodecamp.org/news/why-you-should-start-contributing-to-open-source-software-right-now/',
  'https://www.freecodecamp.org/news/how-to-host-a-static-site-in-the-cloud-in-4-steps/',
  'https://www.freecodecamp.org/news/javascript-console-log-example-how-to-print-to-the-console-in-js/',
  'https://www.freecodecamp.org/news/ethical-hacking-lifecycle-five-stages-of-a-penetration-test/',
  'https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/',
  'https://www.freecodecamp.org/news/unreal-engine-course-create-a-2d-snake-game/',
  'https://www.freecodecamp.org/news/design-a-key-value-store-in-go/',
  'https://www.freecodecamp.org/news/terraform-modules-explained/',
  'https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/',
  'https://www.freecodecamp.org/news/how-i-built-my-one-person-open-source-project/',
  'https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/',
  'https://www.freecodecamp.org/news/how-to-launch-sublime-text-from-your-terminal/',
  'https://www.freecodecamp.org/news/rsync-examples-rsync-options-and-how-to-copy-files-over-ssh/',
  'https://www.freecodecamp.org/news/javascript-string-format-how-to-use-string-interpolation-in-js/',
  'https://www.freecodecamp.org/news/the-least-squares-regression-method-explained/',
  'https://www.freecodecamp.org/news/learn-all-about-data-structures-used-in-computer-science/',
  'https://www.freecodecamp.org/news/sql-group-by-clauses-explained/',
  'https://www.freecodecamp.org/news/good-habits-for-junior-developers/',
  'https://www.freecodecamp.org/news/best-application-security-tools-in-2020ed/',
  'https://www.freecodecamp.org/news/what-is-tls-transport-layer-security-encryption-explained-in-plain-english/',
  'https://www.freecodecamp.org/news/unit-circle-chart-and-trig-calculator/'
]

const url2metadata = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl)
  const data = await metascraper({ html, url })
  return data
}

Promise.all(urls.map(url2metadata)).then(data => {
  const news = data.map((item, i) => ({ id: i + 1, ...item }))
  writeFileSync('./news.json', JSON.stringify(news, null, 2), 'utf8')
  console.log(news)
})
