import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var dt = Date();
var day = dt.slice(0, 10);

const items = ["Item 1", "Item 2"];
const workItems = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { items: items, dt: day });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  items.push(newItem); // Yeni öğeyi items dizisine ekle
  res.redirect("/"); // Anasayfaya yönlendirin
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { workItems: workItems });
});

app.post("/work", (req, res) => {
  const workItem = req.body.newItem;
  if (workItem) workItems.push(workItem);
  res.redirect("/work");
});

app.listen(3000, () => {
  console.log("listening the port");
});
