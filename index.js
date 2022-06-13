const express = require('express');
const Joi =  require('joi');
const { Schema } = require('mongoose');
const courses = require('./routes/couses')


const app = express();
app.use(express.json());

app.use('/api/courses' , courses);
app.get('/',(req,res)=>{
res.send('chal gaya bhailog');
});

const port = 4000;
app.listen(port,()=>console.log(`lestining on ${port}....`));  
