import express from "express"
export const router = express.Router();
import * as haven from "lockit-secrets-test3"

router.get("/getAllUsers", (req, res, next) => {
  haven.getAllHavenUsers().then(data => res.json(data))
});

router.get("/fetchLogs", (req, res, next) => {
  haven.fetchLogs().then(data => res.json(data))
});

router.get("/listGroupsForUser", (req, res, next) => {
  haven.listGroupsForUser().then(data => res.json(data))
});

router.post("/projects/:name", (req, res, next) => {
  const projectName = req.params.name;
  console.log("This process will take 30-60 seconds");
  haven.createProjectCF(projectName).then(data => res.json(data))
});

router.delete("/projects/:name", (req, res, next) => {
  const projectName = req.params.name;
  console.log("This process will take 30-60 seconds");
  haven.deleteProjectCF(projectName).then(data => res.json(data))
});

router.post("/data", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${JSON.stringify(
      req.body
    )}`
  );
});
