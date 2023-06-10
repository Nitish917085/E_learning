const express=require('express');
const Course = require('../models/course');
const Topics = require('../models/topics');
const Videos=require('../models/videos');
const { verifyToken } = require('../middleware/authMiddleware');
const authRoutes=require('./authRoutes');
const router=express.Router();

router.use('/logreg', authRoutes)

router.get('/' ,async (req,res)=>{
    console.log("hi");
    try{
        const courses= await Course.find({});
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
        res.status(200).json(courses);

    }catch{(err)=>{
        res.json("unable to find server");
    }}
})

router.post('/course', async(req,res)=>{
   console.log('course',req.body);
    try{
        const id = req.body.course_id;
        const course=await Course.findById(id).populate('topicsId');
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
        res.status(200).json(course);
    }catch{(err)=>{
        res.json("unable to find server");
    }}
})

router.post('/videos', async(req,res)=>{
    
    console.log('video',req.body);    
     try{
         const id = req.body.video_id;
         const video=await Videos.findById(id);
         res.setHeader("Access-Control-Allow-Origin", "*")
         res.setHeader("Access-Control-Allow-Credentials", "true");
         res.setHeader("Access-Control-Max-Age", "1800");
         res.setHeader("Access-Control-Allow-Headers", "content-type");
         res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
         res.status(200).json(video);
     }catch{(err)=>{
         res.json("unable to find server");
     }}
 })

module.exports=router;