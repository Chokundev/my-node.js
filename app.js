const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{

    res.send('Hello f');

})

app.listen(port, ()=>{
    debug("Listening on port " + chalk.green(port)) ;
})