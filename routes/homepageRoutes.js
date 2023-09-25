const express = require("express");
const fs=require('fs').promises

const home=express.Router()
home.get('/',async (req,res,next)=>{

    const firstPage= await fs.readFile('./html/home.html').catch((err)=>{console.log(err)})
    res.header('Content-Type', 'text/html')
        res.send(firstPage)
         
   
    })
   
home.get('/article/:id',async(req,res,next)=>{
    console.log('oopes worong')
    const secondPage=await fs.readFile('./html/second.html','utf-8').catch((err)=>{console.log(err)})
    res.header('Content-Type', 'text/html')
    
    res.send(secondPage)
})



module.exports={home}