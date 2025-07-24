const express = require("express");
const app = express();

// app.use("/user", 
//   (req,res,next) => {
//    console.log("Handler 1");
//    next();
// },
//   (req,res,next) => {
//    console.log("Handler 2");
//    next();
// },
//   (req,res,next) => {
//    console.log("Handler 3");
//    next(); 
// },
//   (req,res) => {
//    console.log("Handler 4");
//    res.send("FInal Response from Handler 4");
// },

// );

// const handler1 = (req, res, next) => {
//   console.log("Handler 1");
//   next();
// };

// const handler2 = (req, res, next) => {
//   console.log("Handler 2");
//   next();
// };

// const handler3 = (req, res, next) => {
//   console.log("Handler 3");
//   next();
// };

// const handler4 = (req, res) => {
//   console.log("Handler 4");
//   res.send("Final Response from Handler 4");
// };

// app.use("/user", [handler1, handler2, handler3, handler4]);

// // Get /user
// app.get("/user", (req, res) => {

//     console.log("Route hit, but no response sent");
//     res.send("GET request to /user");
// });

// //Post /user
// app.post("/user", (req,res) => {
//   res.send("POST request to /user");
// });

// // PUT /user
// app.put("/user", (req,res) => {
//   res.send("PUT request to /user");
// });

// // DELETE /user
// app.delete("/user", (req, res) => {
//   res.send("DELETE request to /user");
// });





app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
