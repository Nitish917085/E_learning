const mongoose=require('mongoose');

const videosSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  
  url:{
    type:String,
    required:true
  },
 },
 {timestamps:{}});

const Videos = mongoose.model('Videos', videosSchema);
 module.exports=Videos;