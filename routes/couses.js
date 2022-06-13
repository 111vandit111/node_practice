const expres = require('express');
const app =expres.Router();

const courses =[
    { id :1 , name:`ghjkj`} ,
    { id :2 , name:`rtyujkj` },
     {id : 3, name:`cvbnmkj`},
 ]
 


app.get('/',(req,res)=>{
    res.send(courses);
});

app.post('/',(req,res)=>{
const { error } = validateCourse(req.body);

if(error){
const problem = error.message;
console.log(problem);
res.status(400).send(problem);
};

if(!error){
const course = {
id: courses.length +1,
name : req.body.name
};
courses.push();
res.send(course);
};
});

app.put('/:id',(req,res)=>{
const course =  courses.find(c=> c.id === parseInt(req.params.id));
if(!course) res.status(404).send(`course not found`);
const { error } = validateCourse(req.body);
if(error){
const problem = error.message;
console.log(problem);
res.status(400).send(problem);
};

course.name=req.body.name;
res.send(course);
});

function validateCourse(course) {
const aSchema = Joi.object ({
name :Joi.string().min(3) .max(30).required(),
});
return aSchema.validate(course);
};

app.get('/:id',(req,res)=>{
const course =  courses.find(c=> c.id === parseInt(req.params.id));
if(!course) res.status(404).send(`course not found`);
res.send(course);
});

app.delete('/:id',(req,res)=>{
const course =  courses.find(c=> c.id === parseInt(req.params.id));
 if(!course) {res.status(404).send(`course not found`);
res.send(course);
}
if(course)
{const del = courses.indexOf(course);
courses.splice(del,1);
res.send(course);}
});


 


module.exports = app;