const express = require('express');
const session = require('express-session');
const exphbs=require('express-handlebars');
const axios=require('axios');

const app=express();

const PORT=process.env.PORT||3000;

// MiddleWare
// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
// Express Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Routes
// const index=require('./routes/index');
app.get('/',(req,res)=>{
  res.render('index/welcome');
});
app.get('/index', function (req, res) {
  if(req.query.drink){
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${req.query.drink}`;
    axios({
        method: 'get',
        url
    })
    .then(function (response) {
        let drinks = response.data.ingredients;
        res.render("index/resultdrink", {drinks:drinks});
    })
    .catch(function (error) {
        console.log(error);
    });
  }else if(req.query.cocktail){
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.cocktail}`;
    axios({
        method: 'get',
        url
    })
    .then(function (response) {
        let drink = response.data.drinks;
        res.render("index/resultcocktail", {drink:drink});
    })
    .catch(function (error) {
        console.log(error);
    });
  }else{
    let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    axios({
        method: 'get',
        url
    })
    .then(function (response) {
        let drink = response.data.drinks;
        res.render("index/resultcocktail", {drink:drink});
    })
    .catch(function (error) {
        console.log(error);
    });
  }
    // res.send(req.query.cocktail);

});


// Use Routes
// app.use('/',index);


app.listen(PORT,()=>{
  console.log(`Server started on port ${PORT}`);
});
