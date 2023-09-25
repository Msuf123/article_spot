const express=require('express');
const fs=require('fs').promises
const homePath=require('./routes/homepageRoutes')
const app=express()
const articledata=require('./routes/articlesApi');
const { EventEmitter } = require('stream');
const { error } = require('console');

app.use('/articledata/comments/post',(req,res,next)=>{
    let daa=''
    req.on('data',(a)=>{
            daa+=a
            
        })
        req.on('end',()=>{
            console.log(daa)
            req.stringData=daa
            next()
        })
        
    


},[(req,res,next)=>{
    console.log(req.stringData)
    const values=new URLSearchParams(req.stringData)
    console.log(values.get('id'))
next()
}])
app.use('/',homePath.home)

app.use('/articledata',articledata.articledata)
app.get('*',(req,res,next)=>{
    res.send("Error")
})

app.listen(8000,()=>{
  
    console.log('Server is up and running')
})