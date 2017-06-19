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

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


var data={count:0};
app.get('/', function(req, res){
  data.count++;
  res.render('my_first_ejs', data);
});
app.get('/reset', function(req, res){
  data.count=0;
  res.render('my_first_ejs', data);
});
app.get('/set/count', function(req, res){
  if(req.query.count) data.count=req.query.count;
  res.render('my_first_ejs', data);
});
app.get('/set/:num', function(req, res){
  data.count=req.params.num;
  res.render('my_first_ejs', data);
});





app.listen(8082, function(){
  console.log('Server On!');
})
