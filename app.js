// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Article = require("./models/articleSchema");

// mongoose
//   .set("strictQuery", true)
//   .connect(
//     "mongodb+srv://hazem:emad@cluster0.exztspk.mongodb.net/test?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("hh");
//   })
//   .catch(() => {
//     console.log("KK");
//   });

// app.post("/all-articles", (req, res) => {
//   const article = new Article(req.body);
//   console.log(req.body);
//   article
//     .save()
//     .then((result) => {
//       res.redirect("/all-articles");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.listen(5000,()=>{
   

// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hazem:emad@cluster0.exztspk.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  var dbo = db.db("test");
  var myobj = { name: "ggg Inc", address: "Highway 37" };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});