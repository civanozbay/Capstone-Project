import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const items = ["Item 1", "Item 2"];

app.get("/", (req, res) => {
  res.render("index.ejs", { items: items });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  items.push(newItem); // Yeni öğeyi items dizisine ekle
  res.redirect("/"); // Anasayfaya yönlendirin
});

app.listen(3000, () => {
  console.log("listening the port");
});
