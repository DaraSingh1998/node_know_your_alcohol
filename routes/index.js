const express = require('express');
const axios=require('axios');
const router=express.Router();

router.get('/',(req,res)=>{
  res.render('index/welcome');
});
// router.post('/',(req,res)=>{
//   var getCocktailUrl:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.cocktail}`;
//   axios.get(getCocktailUrl).then((response)=>{
//     if(response.body.drinks===null){
//       console.log("Unable to find the Cocktail");
//     }
//   })
// });

router.post('/', function (req, res) {
    // let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${req.body.cocktail}`;
    // axios({
    //     method: 'post',
    //     url
    // })
    // .then(function (response) {
    //     let drinks = response.data.ingredients.strDescription;
    //     console.log(drinks);
    //
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    res.send("working");

});

module.exports=router;
