/* 
mongosh

show dbs

use local

show collections

// Inclusion projection
db.movies.find({}, {rating: 1, name: 1})

// Exclusion projection
db.movies.find({}, {rating: 0, name: 0})

// Cannot mix inclusion and exclusion
db.movies.find({}, {name: 1, trailer: 0})

// Only exception for _id
db.movies.find({}, {_id: 0, name: 1, trailer: 1})

db.movies.find({rating: {$gt: 8}}, {_id:0, rating: 1, name: 1})

// Sorting - Ascending order
db.movies.find({}).sort({rating: 1})

// Sorting - Descending order
db.movies.find({}).sort({rating: -1})

// Compound sorting
db.movies.find({}, {_id:0, rating: 1, name: 1}).sort({rating: -1, name: 1})

// Limit
db.movies.find({}, {_id:0, rating: 1, name: 1}).sort({rating: -1, name: 1}).limit(2);

// Skip
db.movies.find({}, {_id:0, rating: 1, name: 1}).sort({rating: -1, name: 1}).limit(2).skip(2);

// updateMany
db.movies.updateMany({}, {$set: {language: 'English'}})

// updateOne
db.collection.updateOne({id: '99'}, {$set: {language: 'tamil'}})

// deleteMany
db.movies.deleteMany({})

// deleteOne
db.movies.deleteOne({id: '101})

*/
