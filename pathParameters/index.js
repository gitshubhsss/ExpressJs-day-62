const express = require('express');

const app=express();

const port=8080;
app.listen(port);

app.get("/",(req,res)=>{
    res.send("you are on the root path")
})

app.get("/:username/:pass",(req,res)=>{
    // console.log(req.params);
    const {username,pass}=req.params;
    res.send(`username : ${username} & \n passward : ${pass}`);
})



