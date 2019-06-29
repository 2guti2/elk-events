const fs = require('fs')
const ObjectsToCsv = require('objects-to-csv')
const repo = {}

repo.saveInFile = async function (obj) {
  const data = [obj];
  new ObjectsToCsv(data).toDisk('./eventlog.csv', { append: true });
  return obj
}

module.exports = repo