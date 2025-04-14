import { useState } from "react";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import Dropdown from "./common/dropdown";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const internationalTrades = [
    "EXECUTIVE INTERNATIONAL MEMBERSHIP",
    "SAUDI ARABIA INTERNATIONAL TRADE PROGRAMME FRANCE BUSINESS",
    "DELEGATION 2025 TURKIYE INTERNATIONAL TRADE PROGRAMME",
    "DUBAI BUSINESS DELEGATION 2024",
  ];
  const businessMembership = [
    "BUSINESS MEMBERSHIP",
    "EXECUTIVE MEMBERSHIP",
    "YOUTH MEMBERSHIP",
  ];

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/SMBF.png"
              height="40"
              className="d-inline-block align-top"
              alt="SMBF Logo"
            />
          </Navbar.Brand>

          <div className="d-lg-none ms-auto">
            <Button variant="light" onClick={handleShow}>
              <i className="bi bi-list fs-3"></i>
            </Button>
          </div>

          <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
            <Nav className="ms-auto align-items-center">
              <Button variant="light" className="border-0 bg-transparent fs-5">
                Our Vision
              </Button>
              <Dropdown title="Member Benefits" items={businessMembership} />
              <Button variant="light" className="border-0 bg-transparent fs-5">
                Events
              </Button>
              <Dropdown
                title="International Trade"
                items={internationalTrades}
              />
              <Button variant="light" className="border-0 bg-transparent fs-5">
                Support Us
              </Button>
            </Nav>
            <div className="ms-3 d-flex gap-2">
              <Button variant="light" className="border-0 bg-transparent fs-5">
                Log In
              </Button>
              <Button className="fs-5 rounded-4 py-0" variant="primary">
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Button
              variant="light"
              className="border-0 bg-transparent fs-5 text-start"
            >
              Our Vision
            </Button>
            <Dropdown title="Member Benefits" items={businessMembership} />
            <Button
              variant="light"
              className="border-0 bg-transparent fs-5 text-start"
            >
              Events
            </Button>
            <Dropdown title="International Trade" items={internationalTrades} />
            <Button
              variant="light"
              className="border-0 bg-transparent fs-5 text-start"
            >
              Support Us
            </Button>
            <hr />
            <Button
              variant="light"
              className="border-0 bg-transparent fs-5 text-center"
            >
              Log In
            </Button>
            <Button className="fs-5 rounded-4 w-100" variant="primary">
              Sign Up
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
