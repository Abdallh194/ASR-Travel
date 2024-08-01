"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";

function CollapsibleExample() {
  const { isLoggin, newuser } = useSelector((s) => s.ASR);

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Navbar"
        style={{ backgroundColor: "transparent" }}
      >
        <Container>
          <Link href="/" className="logo">
            <span>ASR</span>TRAVEL
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">Home</Link>
              <NavDropdown title="Vacation" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Caribbean
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Jamaica</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Cabo San Lucas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Jewelry</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Playa Del Carmen
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Tick one{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/Flights">Flights</Link>
              <Link href="/Hotels">Hotels</Link>
              <Link href="/CustomerService">Customer Service</Link>
              <Link className="dis-MobileView" href="/UserProfile">
                Profile
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="dis-none-inMobile">
            {isLoggin ? (
              <Link href="/UserProfile">
                <Avatar style={{ margin: "auto" }}>
                  {newuser.NewFirstName[0]}
                </Avatar>
                <b>
                  {newuser.NewFirstName} {newuser.NewLastName}
                </b>
              </Link>
            ) : (
              <Link className="login" href="/Login">
                LogIn
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default CollapsibleExample;
