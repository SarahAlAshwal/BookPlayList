const express = require("express");

const app = express(); 

app.listen(8000, ()=> {
  console.log("now listening for requests on port 8000");
})