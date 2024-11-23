const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Schema (Shape of a Document)
// Document, Collection, Database
// const user = [
//   {name: 'user1', age: 20},
//   {name: 'user2', age: 30},
// ]

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String,
})

const User = mongoose.model('User', userSchema);

async function storeInformation(){
  const user = new User({
    name: 'Pierre',
    age: 68,
    isMarried: false,
    salary: 90000,
    gender: 'M',
  });
  await user.save();
  console.log(user);
}

storeInformation();