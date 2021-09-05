const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const routes = require('./routes/endpoints');
const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//retrieving all data
app.use("/", routes.common); 


const server = app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  
});

