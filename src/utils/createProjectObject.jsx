const createProjectObject = (projectName) => ({
  projectName: projectName,
  environments: {
    Dev: ["Read", "Write"],
    Prod: ["Read", "Write"],
    Stg: ["Read", "Write"],
  },
});

export default createProjectObject;
