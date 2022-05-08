import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase";
import "./Header.css";

// Header Section.
const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  const signOutUser = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => { });
  };

  return (
    <div>
      {/* Using Navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">ORACLE INVENTORY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              {user?.uid && (
                <Nav.Link href="/inventory">MANAGE ITEMS</Nav.Link>
              )}
              {user?.uid && (
                <Nav.Link href="/addItem">ADD ITEM</Nav.Link>
              )}
              {user?.uid && (
                <Nav.Link href="/manageInventory">MY ITEMS</Nav.Link>
              )}

            </Nav>
            <Nav>
              <Nav.Link href="/blogs">BLOGS</Nav.Link>
              {user?.uid ? (
                <Nav.Link eventKey={2} onClick={signOutUser} href="/login">
                  SIGN-OUT
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} href="/login">LOGIN</Nav.Link>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar End !. */}
    </div>
  );
};

export default Header;
