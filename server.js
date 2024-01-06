const express = require("express");
const path = require("path");
const route = require("./route");
//set up express app

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
app.use(express.static("public"));
app.use(route);
// require("./route/api-routes.js")(app);
// require("./route/html-routes.js")(app);
//
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.listen(PORT, function () {
  console.log("App listening on port: " + PORT);
});
