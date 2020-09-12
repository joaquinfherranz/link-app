const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({
  news: []
}).write()

module.exports = {
  reset: () => db.get('news').remove().write(),
  news: {
    save: data => db.get('news').push(data).write(),
    fetchAll: () => db.get('news').value(),
    fetchById: id => db.get('news').filter({ id }).value()
  }
}
