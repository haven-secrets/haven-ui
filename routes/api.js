const express = require("express");
const router = express.Router();

router.get("/hello", (req, res, next) => {
  res.send({ express: "Hello From Haven" }).catch(next);
});

router.post("/data", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${JSON.stringify(
      req.body
    )}`
  );
});

module.exports = router;
