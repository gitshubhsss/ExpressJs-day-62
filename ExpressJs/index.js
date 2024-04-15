const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});

// app.use((req, res) => {
//   // console.log(req);
//   console.log("request received");
//   // res.send("this is the basic respornse") strings
//   // res.send({
//   //     name:"apple",
//   //     type:"fruit"
//   // })//it will give the response in the form of JSOM

//     let htmlRes=`<h1> I love JavaScript </h1>`;
//     res.send(htmlRes);
// });

app.get("/",(req,res)=>{
    res.send("we are on the root path")
})
app.get("/home",(req,res)=>{
    res.send("we are on the home path")
})
app.get("/contact",(req,res)=>{
    res.send("we are on the contact path")
})
app.get("/about",(req,res)=>{
    res.send("we are on the about path")
})
app.get("*",(req,res)=>{
    res.send("please enter the correct path")
})//this is the custom response

app.post("/",(req,res)=>{
    res.send("you have sent the post request");
})