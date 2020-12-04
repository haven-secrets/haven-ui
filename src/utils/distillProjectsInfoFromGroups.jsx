const distillProjectsInfoFromGroups = (array) => {
  const projectsInfo = [];

  for (let i = 0; i < array.length; i++) {
    const groupInfo = array[i]
      .match(/^HavenSecrets.*(Dev|Prod|Stg)(|Read|Write)Group$/)
      ?.slice(0, 3);
    if (groupInfo) {
      const [groupName, environments, permissions] = groupInfo.slice(0, 3);

      const projectName = groupName.slice(12, groupName.indexOf(environments));
      const existingProject = projectsInfo.find(
        (project) => project.projectName === projectName
      );
      if (existingProject) {
        if (existingProject.environments[environments]) {
          existingProject.environments[environments].push(permissions);
        } else {
          existingProject.environments[environments] = [permissions];
        }
      } else
        projectsInfo.push({
          projectName,
          environments: { [environments]: [permissions] },
        });
    }
  }
  return projectsInfo;
};

export default distillProjectsInfoFromGroups;
