
module.exports = getDate;

function getDate(){
var today = new Date();        //uses date function to get latest date
// var currentday =today.getDay();
 var options ={
     weekday : "long",
     day : "numeric",
     month : "long"
 }
 var day = today.toLocaleDateString("en-US",options);
 return day;
}