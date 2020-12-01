import { Header, Divider } from "semantic-ui-react";
import Nav from "./Nav.js";
import Welcome from "./Welcome.js";

function HavenHeader() {
	return (
		<div>
			<Header size="huge">Haven</Header>
			<Nav />
			<Welcome />
			<Divider />
		</div>
	);
}

export default HavenHeader;
