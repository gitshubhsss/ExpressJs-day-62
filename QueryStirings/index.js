const express=require("express");

const app=express();

app.listen(8080);

app.get("/",(req,res)=>{
    res.send("you are on the root path");
})

app.get("/:username/:pass",(req,res)=>{
    const {username,pass} =req.params;

    const htmlCode=`username : @${username} & passward : ${pass}`;

    res.send(htmlCode)
})//this is the path parameter


app.get("/search",(req,res)=>{
    // console.log(req.query);
    const {q}=req.query;
    if(!q){
        res.send("query doesont exists");
    }
    const code=`<h1>your query is ${q}`
    res.send(code);
})
