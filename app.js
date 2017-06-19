/*function fizzBuzz(){
  //body
  for(i=1; i<=100; i++){
if(i%3 === 0 && i%5 ===0){
  console.log("FizzBuzz");
} else if(i%3 === 0){
  console.log("Fizz");
}
  else if(i%3 === 0){
  console.log("Buzz");
}else{
  console.log(i);}
}
}
fizzBuzz();*/

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8081, function(){
  console.log('Server On!');
})
