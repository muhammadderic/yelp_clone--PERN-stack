const express = require("express");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurantRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", restaurantRouter);

app.listen(5000, () => {
  console.log("server is listening");
})