
const express = require('express')
const morgan = require('morgan')
const app = express()
const main = require('./views/main')
const { db } = require('/Users/regineblanchard/wikistack/public/stylesheets/models')

app.use(morgan("dev"))

app.use(express.static(__dirname + "/public"))

app.get("/", (req,res) => {

    res.send(`<h1> Hello World <h1>`)
    
});

app.get("/", (req, res) => {  
    res.send(main(" "));

});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const PORT = 1337 ;
app.listen(PORT,()=>{
    console.log(`Our server is listening on port ${PORT}`)
})

