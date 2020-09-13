const { sources } = require('../__test__/fixtures')

module.exports = async () => {
  return Promise.resolve({
    body: sources.freecodecamp
  })
}
