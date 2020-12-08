const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/api", apiRoutes);
//
// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
