import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var numberOfLetters = req.body["fName"].length + req.body["lName"].length;
  // console.log(numberOfLetters);

  res.render("index.ejs", {
    lengthOfLetters: numberOfLetters,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});