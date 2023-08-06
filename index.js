import express from "express";

const app = express();

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("listening the port");
});
