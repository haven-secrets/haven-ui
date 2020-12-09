import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/api.js";

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, PUSH, DELETE");
  next();
});

app.use(bodyParser.json());
app.use("/api", router);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
