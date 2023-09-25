const express = require("express");
const req = require("express/lib/request");
const fs=require('fs').promises
const articledata=express.Router();
articledata.get('/',async(req,res,next)=>{
    const data=await fs.readFile('./data/data.json')
    res.header('Content-Type','application/json')
res.send(data.toString())
})
articledata.get('/:id',async(req,res,next)=>{
    
    const data=await fs.readFile('./data/data.json','utf-8').catch((err)=>{console.log(err)})
    const obj=JSON.parse(data)
   
    obj.map((i)=>{
    if(i.id===req.params.id){
        
        res.send(i)
    }
    })
articledata.post('/comments/post',async(req,res,next)=>{
   
    res.send('ok')
})
})
module.exports={articledata}