import express from "express"
export const router = express.Router();
import * as haven from "lockit-secrets-test3"


router.get("/getAllUsers", (req, res, next) => {
  haven.getAllHavenUsers().then(data => res.json(data))
});

router.post("/data", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${JSON.stringify(
      req.body
    )}`
  );
});
