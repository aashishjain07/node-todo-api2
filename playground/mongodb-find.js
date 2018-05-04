//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
  return console.log('Unable to connect to MONGODB server');
}
  console.log('Connected to MONGODB server');

const db = client.db('TodoApp');
// db.collection('Todos').find().toArray().then((docs) =>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todo', err);
// });

// db.collection('Todos').find().count().then((count) =>{
//   console.log(`Todos count: ${count}`);
// //  console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todo', err);
// });

db.collection('Users').find({name: 'Ashish Jain'}).toArray().then((docs) =>{
  console.log(`Users`);
 console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch todo', err);
});


  // client.close();
});
