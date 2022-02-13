const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router");


mongoose
  .connect("mongodb://localhost:27017/sample", { useNewUrlParser: true })
  .then(() => {
    app = express();
    app.use("/api", routes);
    app.use(express.json());
    app.listen(3000, () => {
      console.log("Server has started!");
    });
  });




