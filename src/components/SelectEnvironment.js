import { List, Header } from "semantic-ui-react";

function SelectEnvironment({ match }) {
	console.log({ match });
	const projectName = match.params.project;
	const ENVIRONMENTS = ["Development", "Production", "Staging"]; // TEMPORARY

	return (
		<div class="indentedList">
			<Header size="medium">Select An Environment:</Header>
			<List link>
				{ENVIRONMENTS.map((environment) => {
					return (
						<List.Item as="a" href={`/${projectName}/${environment}`}>
							{environment}
						</List.Item>
					);
				})}
			</List>
		</div>
	);
}

export default SelectEnvironment;
