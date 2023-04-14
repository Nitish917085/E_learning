const express=require('express');
const Course = require('../models/course');
const Topics = require('../models/topics');
const Videos=require('../models/videos')
const router=express.Router();

router.get('/',async (req,res)=>{
    console.log("hi");
    try{
        const courses= await Course.find({});
        res.status(200).json(courses);

    }catch{(err)=>{
        res.json("unable to find server");
    }}
})

router.post('/course',async(req,res)=>{
   console.log('course',req.body);
   
    try{
        const id = req.body.course_id;
        const course=await Course.findById(id).populate('topicsId');
        res.status(200).json(course);
    }catch{(err)=>{
        res.json("unable to find server");
    }}
})

router.post('/videos',async(req,res)=>{
    console.log('video',req.body);    
     try{
         const id = req.body.video_id;
         const video=await Videos.findById(id);
         res.status(200).json(video);
     }catch{(err)=>{
         res.json("unable to find server");
     }}
 })

module.exports=router;