const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playgroundplg')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author:[authorSchema]
}));

async function createCourse(name, author) {
  const course = new Course({
    name , 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function removeAuthor(courseId,authorsID) {
  const course = await Course.findById(courseId).catch();
  course.author.pop(authorsID);
  const result = await course.save();
  console.log(result);
}

async function addauthor(courseId,authors) {
  const course = await Course.findById(courseId).catch();
 course.author.push(authors);
 course.save();
  
}
//createCourse('Node Course', [new Author({name:'Mosh' ,bio:'designer',website:'hemdani.com'}),new Author({name:'vans' ,bio:'flyer',website:'vans.com'})]);

removeAuthor('5f75a3891ce32d3050b7dad6','5f7acd8ef5003b2f54b1fd97');

//addauthor('5f75a3891ce32d3050b7dad6',new Author({name:'amy' ,bio:'yoyo',website:'toto.com'}));