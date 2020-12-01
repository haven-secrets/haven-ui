import { List, Header } from "semantic-ui-react";

// TODO: rename to SelectProject?
// TODO: maybe actually we render either SelectProject,
//   SelectEnvironment, or a Project component depending on
//   the state (which could have a sort of enum with 3 values)
function Projects() {
	const HARDCODED_PROJECT_NAMES = ["Todos", "AirlineRoutes"];

	return (
		<div class="indentedList">
			<Header size="medium">Select A Project:</Header>
			<List link>
				{HARDCODED_PROJECT_NAMES.map((projectName) => {
					return (
						<List.Item as="a" href={`/${projectName}/choose-environment`}>
							{projectName}
						</List.Item>
					);
				})}
			</List>
		</div>
	);
}

export default Projects;
