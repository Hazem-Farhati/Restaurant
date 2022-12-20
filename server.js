const express = require("express");
const cors = require("cors");
const app = express();
const db_connect = require("./db_connect");
require("dotenv").config();
db_connect();
PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/user"));
app.use("/categorie", require("./routes/categorie"));
app.use("/menu", require("./routes/menu"));
app.use("/feedback", require("./routes/feedback"));
app.use("/reservation", require("./routes/reservation"));
app.use("/reservationDate", require("./routes/reservationDate"));
app.use("/message", require("./routes/message"));

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server mriguel")
);
