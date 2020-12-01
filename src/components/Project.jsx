// import React from "react";
import { Header, Divider } from "semantic-ui-react";
import SecretList from "./secrets/SecretList";
import PermittedUserList from "./users/PermittedUserList";

const Project = ({ match }) => {
	const projectName = match.params.project;
	const environment = match.params.environment;

	return (
		<div>
			<Header size="large">{projectName}</Header>
			<Header size="medium" style={{ marginBottom: "2em" }}>
				{environment}
			</Header>
			<SecretList />
			<Divider />
			<PermittedUserList />
		</div>
	);
};

export default Project;
