const express = require('express');
const axios=require('axios');
const router=express.Router();

router.get('/',(req,res)=>{
  res.render('index/welcome');
});
router.post('/',(req,res)=>{
  var getCocktailUrl:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.cocktail}`;
  axios.get(getCocktailUrl).then((response)=>{
    if(response.body.drinks===null){
      console.log("Unable to find the Cocktail");
    }
  })
});

module.exports=router;
