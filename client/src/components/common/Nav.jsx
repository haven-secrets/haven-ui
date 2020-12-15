import { Menu, Container, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Nav({role}) {
  const adminRoutes = () => (
    <>
      <Menu.Item
        as={NavLink}
        to="/users"
        name="Users"
        style={{
          fontSize: "2.1em",
        }}
      />
      <Menu.Item
        as={NavLink}
        to="/logs"
        name="Logs"
        style={{
          fontSize: "2.1em",
        }}
      />
    </>
  );
  return (
    <Menu style={{ background: "linear-gradient(90deg, rgba(0,242,177,1) 35%, rgba(62,230,225,1) 100%)"}} fixed="top" borderless inverted widths={5}>
      <Container>
        <Menu.Item
          header
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            paddingBottom: ".4em",
            paddingTop: ".4em",
          }}
        >
          <Image
            size="tiny"
            src="/images/haven-transparent.png"
            style={{ marginRight: "1.5em" }}
          />
          haven
        </Menu.Item>
        <Menu.Item />
        <Menu.Item
          as={NavLink}
          to="/projects"
          name="Projects"
          style={{
            fontSize: "2.1em",
          }}
        />
        {role === "Admin" ? adminRoutes() : ""}
      </Container>
    </Menu>
  );
}
export default Nav;
