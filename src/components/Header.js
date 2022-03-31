import React from "react";
import { useContext } from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Navbar,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { EshopContext } from "./Context";

import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { cart } = useContext(EshopContext);

  return (
    <div className="header">
      <div>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">METRO</Navbar.Brand>

            <Link to="/cart">
              <FaShoppingCart className="icon" />
              <span className="icon-number">{cart.length}</span>
            </Link>

            <Navbar.Toggle aria-controls="offcanvasNavbar" />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Categories
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="link" to="/man">
                    Men's clothing
                  </Link>
                  <Link className="link" to="/woman">
                    Women's clothing
                  </Link>
                  <Link className="link" to="/jewelery">
                    Jewelery
                  </Link>
                  <Link className="link" to="/electronics">
                    Electronics
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
