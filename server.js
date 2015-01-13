var express = require('express');
var hbs = require('hbs');
var path= require('path');
var bodyParser= require('body-parser');

//user mode1
var userscontroller =require('./controllers/users');  //creates an express server
var app= express();
app.set('views', path.join(__dirname,
                          'views'));
app.set('view engine','html');
app.engine('html', hbs.__express);
app.use(bodyParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded(
    {
        extended:false
    }));

app.use(express.static('public'));

//routes
app.get('/',function(request,response){         //we are getting the request.these are callback,anonymous functions

    response.render('index',{ 
        title: "home", users: userscontroller.getUsers});
});
    
    
app.get('/users/:id',function(request,response){         //we are getting the request.these are callback,anonymous functions
var user=
    users.getUser(request.params.id);
    response.render('profile',{ title: "User Profile", user: userscontroller}); 
});

app.get('/login',function(request,response){
response.render('login',{
    title:"login"
});
});

app.get('/about',function(request,response){
response.render('about',{
    title:"about"
});
});

app.get('/signup',function(request,response){
response.render('signup',{
    title:"signup"});
});

app.post('/login', userscontroller.postLogin);
       
       
   

app.listen(3000);

