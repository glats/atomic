var express = require("express");
var app = express();

app.listen(8003, () => {
 console.log("Server running on port 8003");
});

app.get("/", (req, res) => {
    res.send("Hello Im Nodejs and im Running on port 8003");
});