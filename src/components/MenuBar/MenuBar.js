import { getAuth, signOut } from "@firebase/auth";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import  img  from "../images/logo1.png";

const MenuBar = () => {
  const auth = getAuth();
  const { allFirebase } = useAuth();
  const {  user, setUser } = allFirebase;
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser('');
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <a class="navbar-brand" href="#">
              <img src={img} alt="" width="30" height="24" />
            </a>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>

              {user?.email ? (
                <>
                  <Nav.Link as={Link} to="/dashBoard">
                    DashBoard
                  </Nav.Link>

                  <Button onClick={handleLogout} variant="warning">
                    Log Out
                  </Button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                <a href="#login" className="mx-3 link">
                  {user?.displayName}
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MenuBar;
