var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


// MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {
//     assert.equal(err, null);
//     console.log("Successfully connected to MongoDB.");

//     var query = {"category_code": "biotech"};
//     var projection = {"name":1, "category_code": 1, "_id": 0}

//     var cursor = db.collection('companies').find(query)
//     cursor.project(projection)

//     cursor.forEach(
//         doc => console.log(doc),
//         err => {
//             assert.equal(err, null)
//             return db.close()
//         }
//     )
// });

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {
    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"founded_year": 2010};
    
    var cursor = db.collection('companies').find(query)
    cursor.project({"name":1, "number_of_employees": 1, "_id": 0})

    cursor.forEach(
        doc => console.log(doc),
        err => {
            assert.equal(err, null)
            return db.close()
        }
    )
});
