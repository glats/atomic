var express = require("express");
var app = express();

app.listen(8002, () => {
 console.log("Server running on port 8002");
});

app.get("/", (req, res) => {
    res.json("Hello World");
});