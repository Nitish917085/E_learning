const mongoose=require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({

    title: String, // String is shorthand for {type: String}
    topicsId:[{        
            type: Schema.Types.ObjectId,
            ref:'Topics'
    }]
},
 {timestamps:{}});

const Course = mongoose.model('Course', courseSchema);
module.exports=Course;