const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Gitto", lastName: "Thomas" });
});

app.post("/user", (req,res) => {
    res.send("Data successfully saved to the database!");
});

app.delete("/user", (req,res) => {
    res.send("Deleted Successfully");
})

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
