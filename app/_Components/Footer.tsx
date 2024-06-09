import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Crad = ({ header, link }) => {
  return (
    <Col md={3} xs={12} className="footer-card">
      <div className="header">{header}</div>
      <div className="desc">
        {link.map((e: string) => {
          return <div>{e}</div>;
        })}
      </div>
    </Col>
  );
};

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3} xs={12} className="footer-card">
            <div className="header">About Us</div>
            <div className="desc">
              ASR TRAVEL connects the world to and through our global hub in
              Egypt. We operate modern, efficient and comfortable aircraft
            </div>
          </Col>
          <Crad
            header="Help"
            link={[
              "Help and contact",
              "Travel updates",
              "Special assistance",
              "common questions",
            ]}
          />
          <Crad
            header="Book flights"
            link={[
              "Book flights",
              "Travel services",
              "Transportation",
              "Planning your trip",
              "Search for flights",
            ]}
          />
          <Crad
            header="Booking management"
            link={[
              "Check in",
              "Manage reservations",
              "Private car with driver",
              " Flight status",
            ]}
          />
          <hr />
          <Crad
            header="before traveling"
            link={[
              "Luggage",
              "Manage reservations",
              "Private car with driver",
              " Flight status",
            ]}
          />
          <Crad
            header="Lorem Ipsum"
            link={[
              "Check in",
              "Manage reservations",
              "Private car with driver",
              " Flight status",
            ]}
          />
          <Crad
            header="Lorem Ipsum"
            link={[
              "Check in",
              "Manage reservations",
              "Private car with driver",
              " Flight status",
            ]}
          />
          <Crad
            header="Lorem Ipsum"
            link={[
              "Check in",
              "Manage reservations",
              "Private car with driver",
              " Flight status",
            ]}
          />
          <hr />
          <Col
            md={4}
            xs={12}
            className="footer-card d-flex width-100-mobileView d-flex-mobileView"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Your Email.............."
            />
            <Button className="submit">Submit</Button>
          </Col>
          <Col
            md={8}
            xs={12}
            className="footer-card d-flex width-100-mobileView"
          >
            <div className="dis-Block-MobileVIEW">
              <div className="down-Section">
                <span>Downlod From</span>
                <div className="head">
                  App Store <AppleIcon fontSize="large" className="icon" />
                </div>
              </div>
              <div className="down-Section">
                <span>Downlod From</span>
                <div className="head">
                  Google Play {"  "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-google-play icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="socials">
              <a
                href="https://twitter.com/AbdallhSabry9"
                className="social"
                target="_blanck"
              >
                <TwitterIcon
                  className="social-icon"
                  style={{ backgroundColor: "#1DA1F2" }}
                />
              </a>
              <a href="#s" className="social">
                <TelegramIcon
                  className="social-icon"
                  style={{ backgroundColor: "#229ED9" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100007172563893"
                target="_blanck"
                className="social"
              >
                <FacebookIcon
                  className="social-icon"
                  style={{ backgroundColor: "#4267B2" }}
                />
              </a>
              <a className="social">
                <YouTubeIcon
                  className="social-icon"
                  style={{ backgroundColor: "#FF0000" }}
                />
              </a>
              <a
                href="https://wa.me/+201091415560"
                className="social"
                target="_blanck"
              >
                <WhatsAppIcon
                  className="social-icon"
                  style={{ backgroundColor: "#25D366" }}
                />
              </a>
            </div>
          </Col>
          <div className="Policy">
            For more details on how we use your information, please see our
            Privacy Policy
          </div>
          <hr />
          <div className="copyRight">
            <div className="copy">
              ASR TRAVEL {Year} ©, all rights reserved .
            </div>
            <div className="uther">
              It was designed and implemented by Engineer Abdullah Sabry
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
