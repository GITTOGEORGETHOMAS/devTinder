const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("🚀 DevTinder Home API is live!");
})

app.get('/profile', (req,res) => {
     res.send("👤 DevTinder Profile Page");
})

app.use((req,res) => {
    res.status(404).send("❌ Route not found");
})
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...");
    
});