const fs = require("fs");
const uniquid = require("uniquid");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  console.log("GET request for notes");

  let data = fs.readFileSync("./db/db.json", "utf8");
  res.json(JSON.parse(data));
});

router.post("/notes", (req, res) => {
  const nNote = {
    ...req.body,
    id: uniquid(),
  };
  console.log("Post request for new note");
  let data = fs.readFileSync("./db/db.json", "utf8");
  const daJson = JSON.parse(data);

  daJson.push(nNote);

  fs.writeFile("./db/db.json", JSON.stringify(daJson), (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(text);
  });
  console.log("created a note");
  res.json(data);
});
module.exports = router;
