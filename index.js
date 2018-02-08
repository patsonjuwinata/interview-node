const app = require("express")();

app.get("/", (req, res) => {
    res.send("Hi you can set forex levels with me!");
});

var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Listening on " + port);
});