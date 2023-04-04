const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Deric");
});

app.listen(5000, () => {
  console.log("server is listening");
})