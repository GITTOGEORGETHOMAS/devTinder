const express = require("express");
const app = express();
const { adminAuth,userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth); // Apply middleware to all routes starting with /admin



app.post("/user/login", (req,res) => {
   res.send("User Logged In");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data sent"); // Not protected
});

app.get("/admin/getAllData", (req, res) => {
   res.send("All Data Sent"); // Protected
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user"); // Protected
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
