import express from "express";
import stringify from "json-stringify-safe";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("OK");
});

app.post("/", (req, res) => {
  res.contentType("application/json");
  res.send(stringify(req));
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
