import { Header } from "semantic-ui-react";

function Welcome() {
	const HARDCODED_USERNAME = "developer1";

	return <Header size="large">{`Welcome, ${HARDCODED_USERNAME}`}</Header>;
}

export default Welcome;
