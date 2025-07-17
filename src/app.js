const express = require("express");
const app = express();

const userHandlers = [
  (req, res, next) => {
    console.log("Handling the route user1!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user2!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user3!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user4!!");
    res.send("4th Response back");
  }
]

app.use("/user", userHandlers);


app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
