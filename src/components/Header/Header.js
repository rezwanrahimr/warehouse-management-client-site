import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase";
import "./Header.css";
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
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div>
      <Navbar className="navbarr" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="React Bootstrap logo"
              src="https://avatars.githubusercontent.com/u/4430336?s=200&v=4"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            ORACLE INVENTORY
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
           
            {user?.uid && (
              <Nav.Link href="/inventory">Manage Items</Nav.Link>
            )}
            {user?.uid && (
              <Nav.Link href="/addItem">Add Item</Nav.Link>
            )}
            {user?.uid && (
              <Nav.Link href="/manageInventory">My Items</Nav.Link>
            )}
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            {user?.uid ? (
              <Nav.Link onClick={signOutUser} href="/login">
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
