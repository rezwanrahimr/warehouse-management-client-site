import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../../firebase';
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
        })
    },[])
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
            }).catch((error) => {
            });
    }

    return (
        <div className='col-12 col-md-12'>
            <Navbar  bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://avatars.githubusercontent.com/u/4430336?s=200&v=4"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ORACLE INVENTORY
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/addItem">ManageInventories</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        {
                            user?.uid ? (
                                <Nav.Link onClick={signOutUser } href="/login" >sign out</Nav.Link>) : (
                                <Nav.Link  href="/login" >Login</Nav.Link>
                            )
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;