import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<Menu compact>
			<Menu.Item as={NavLink} to="/projects" name="projects" />
			<Menu.Item as={NavLink} to="/users" name="users" />
			<Menu.Item as={NavLink} to="/logs" name="logs" />
		</Menu>
	);
}

export default Nav;
