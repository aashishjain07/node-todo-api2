const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findoneAndRemove()

//Todo.findByIdAndRemove
// Todo.findoneAndRemove({_id: '5af024c872bd7c26d0497fce'}).then((todo) => {
//
// });
//
Todo.findByIdAndRemove('5af024c872bd7c26d0497fce').then((todo) => {
  console.log(todo);
});
