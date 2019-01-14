const express = require('express');
const session = require('express-session');
const exphbs=require('express-handlebars');

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
const index=require('./routes/index');




// Use Routes
app.use('/',index);


app.listen(PORT,()=>{
  console.log(`Server started on port ${PORT}`);
});
