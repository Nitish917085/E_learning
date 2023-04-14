const mongoose=require('mongoose');

const topicsScheme = new mongoose.Schema({
    title: String, 
    videosId:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Videos'
          },
        ],        
},
 {timestamps:{}});

const Topics = mongoose.model('Topics', topicsScheme);
module.exports=Topics;