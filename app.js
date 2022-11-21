const express = require("express");
const BodyParser =require("body-parser");
const app = express();
const date = require(__dirname+"/date.js");

app.use(BodyParser.urlencoded({extended:true}));
app.set("view engine","ejs"); //this is to use ejs which is basically for tamplationg we have to create a views folder and pass this so that it will view engine in ejs

app.use(express.static("public"));


var items=[ "good food","jogging","happylife"];
let workItems =[];

app.get("/",function(req,res){
  

//    if(currentday==0){
//     day= "sunday";
//     }
//    else if(currentday==1){
//     day ="monday";
//    }
//    else if(currentday==2){
//     day ="tuesday";
//    }
//    else if(currentday==3){
//     day ="wednesday";
//    }
//    else if(currentday==4){
//     day ="thursday";
//    }
//    else if(currentday==5){
//     day ="friday";
//    }
//    else{
//     day ="saturday";
//    }
   let day = date();
   console.log(day);

 res.render("list",{ListTitle:day ,newListItems:items})   //we use this to render the ejs file to get the ready made tamplate with some added changes

});

app.post("/",function(req,res){

var item = req.body.text;
if(req.body.btn == "Work"){
    workItems.push(item);
    res.redirect("/Work");
}else
items.push(item);
res.redirect("/");
})
app.get("/about",function(req,res){
 res.render("about")
})

app.get("/Work",function(req,res){
    res.render("list",{ListTitle:"Work",newListItems:workItems});
})

// app.post("/Work",function(req,res){
//     let work =req.body.text;
//     workItems.push(work);

//     res.redirect("/Work")
// })


app.listen(3000,function(){
    console.log("server running on port 3000");
})
