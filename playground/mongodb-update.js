//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
  return console.log('Unable to connect to MONGODB server');
}
  console.log('Connected to MONGODB server');

const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5aec067ff7e78c1e8cf9051a')
}, {
  $set: {
    completed: false
  }
}, {
  returnOriginalL: false
}).then((result) => {
  console.log(result);
});

});


  // client.close();
