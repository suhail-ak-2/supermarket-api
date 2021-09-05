const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defining routes
const routes = {
  home: require("./routes/home"),
};


//retrieving all data
app.use("/", routes.home); 


const server = app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  
});

