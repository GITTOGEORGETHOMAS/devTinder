const express = require("express");
const app = express();

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.send("User Data");
  } catch (error) {
    res.status(500).send("Oops! User data could not be fetched.");
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message); // Log it for internal debugging
  res.status(500).send("Something went wrong"); // Generic message to user
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
