const express=require('express');
const app=express();
const cors=require('cors');
const mongoose = require('mongoose');
const routes=require('./routes')
const {videos, topics,course}=require('./data');
//const Topics = require('./models/topics');
// const Topics=require('./models/topics');
//const Videos = require('./models/videos');
//const Course = require('./models/course');
//const Videos=require('./models/videos')
const corsOrigin ={
  origin:'*', //or whatever port your frontend is using
  credentials:true,            
  optionSuccessStatus:200
}
app.use(express.json());
app.use(cors(corsOrigin))

main().catch(err => console.log(err));
main().then(err=>{
    console.log("database connected");
  //Videos.insertMany(videos);
  //Course.insertMany(course);   
  //Topics.insertMany(topics);  
})
async function main() {
  await mongoose.connect('mongodb+srv://immcrutas:V7e2nIpsXfiBe2MK@cluster0.f93y4ir.mongodb.net/imarticus?retryWrites=true&w=majority');
}
//app.use(express.urlencoded({extended:true}))
app.use('/', routes);

const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>console.log('server started'));