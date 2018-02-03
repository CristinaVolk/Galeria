const assert = require('assert');

const insertDocuments = function(db, callback) {
  // Get the documents collection
  console.log('fghjk');
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertOne({
    fieldname: 'filename',
    path: 'uploads\\f9842e73c5d0cbf5133b585478651221'
  }
, function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
  const findDocuments = function(db, callback) {
// Get the documents collection
const collection = db.collection('documents');
// Find some documents
collection.find({
  fieldname: 'filename',
  path: 'uploads\\f9842e73c5d0cbf5133b585478651221'
}).toArray(function(err, docs) {
  assert.equal(err, null);
  console.log("Found the following records");
  console.log(docs);
  callback(docs);
});
};
module.exports = {insertDocuments, findDocuments};
