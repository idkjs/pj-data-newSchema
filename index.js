const fs = require('fs');
const generateSchema = require('json-to-graphql');
const json = require('./src/api.js');
const assert = require('assert');
// console.log(
//   createSchemaFromJSON(json)
// )

const schema = generateSchema(json)
fs.writeFile('schema.js', schema, (err, success) => {
    assert.equal(err, null);
    success = console.log('success');
});