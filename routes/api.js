const request=require('request');
var getDrink=(drink,callback)=>{
	request({
	url:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`,
	json:true
},(error,reponse,body)=>{
  if(error){
		callback("Unable to connect to Google Servers");
	}
  else if(body.drinks===null){
		callback("Unable to find that address");
	}
	else{
		callback(undefined,{
			temp:body.currently.temperature,
			apptemp:body.currently.apparentTemperature
		});
	}
});
}
module.exports={
  getDrink
};
