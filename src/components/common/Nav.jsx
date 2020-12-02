import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <Menu tabular style={{ fontSize: "1.5em" }}>
      <Menu.Item as={NavLink} to="/projects" name="Projects" />
      <Menu.Item as={NavLink} to="/users" name="Users" />
      <Menu.Item as={NavLink} to="/logs" name="Logs" />
    </Menu>
  );
}
export default Nav;
