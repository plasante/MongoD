const mongoose = require('mongoose');

/*
    Database test will be created automatically and will contain several collections of document.
    A user object is called a document
    Many user objects are called a collection of users

 */
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

// Find users whose age is greater than 40 or they are not married
async function fetchInformation() {
  const users =
      await User
          .find()
          .or( [{age: {$gt: 40}}, { isMarried: false}])
          .select('name')
          .sort('name');
  console.log(users);
}
fetchInformation();

// async function fetchInformation() {
//   const users =
//       await User
//           .find()
//           .or( [{age: {$gt: 40}}, { isMarried: false}])
//           .select('name');
//   console.log(users);
// }
// fetchInformation();

// async function fetchInformation() {
//   const users = await User.find().or( [{age: {$gt: 40}}, { isMarried: false}]);
//   console.log(users);
// }
// fetchInformation();

// Comparison Operator
// eq
// ne
// gt
// gte
// lt
// lte
// in
// nin



// async function fetchInformation() {
//   // const users = await User.find({
//   //   age: { $gt: 30 }
//   //});
//   const users = await User.find({
//     salary: { $nin: [40000,45000] },
//   })
//   console.log(users);
// }
// fetchInformation();

// async function fetchInformation1() {
//   const users = await User.find().and([{isMarried: true},{age:35}]);
//   console.log(users);
// }
// fetchInformation1();


// async function fetchUser() {
//   const users = await User.find({
//     isMarried: false,
//   }).select('name salary').sort('-salary').limit(2);
//   // User.find({isMarried:false}).countDocuments();
//   console.log(users);
// }
// fetchUser();

// async function storeInformation(){
//   const user = new User({
//     name: 'Pierre',
//     age: 68,
//     isMarried: false,
//     salary: 90000,
//     gender: 'M',
//   });
//   await user.save();
//   console.log(user);
// }

//storeInformation();