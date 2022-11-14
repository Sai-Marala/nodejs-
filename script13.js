var express=require('express')
var app =express();

app.get('/helloThere',function(requested,response){
    response.send('hello there,from express')
})
app.listen(1337,function(){
    console.log('Listening at port 1337')
});