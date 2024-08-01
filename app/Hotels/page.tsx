"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HiveIcon from "@mui/icons-material/Hive";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="Hotels"
    >
      <div className="Hotel-Header">
        <div className="overlay">
          <div className="info">
            <div className="head">
              <span>ASR</span> Travels
            </div>
            <div className="desc">Hotels & Resort</div>
          </div>
        </div>
        <div className="Hotel-Number">
          <div className="Number-desc">
            <div className="Number-Type">Check-In</div>
            <div className="Number">2,705</div>
          </div>
          <div className="Number-desc">
            <div className="Number-Type">Check-Out</div>
            <div className="Number">3,705</div>
          </div>
          <div className="Number-desc">
            <div className="Number-Type">Geust</div>
            <div className="Number">10,705</div>
          </div>
          <div className="Number-desc">
            <div className="Number-Type">Bookings</div>
            <div className="Number">10,705</div>
          </div>
        </div>
      </div>
      <div className="About">
        <Container>
          <Row>
            <Col md={6} xs={12} className="About-Card Text-Card">
              <h4>About</h4>
              <div className="Card-header">
                <span>ASR</span> Travel For Hotels & Resort
              </div>
              <div className="Card-Desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt nemo sequi est, aliquam porro excepturi totam mollitia
                veritatis adipisci odio? Suscipit voluptas maxime saepe fugiat
                minus, ea eveniet doloremque blanditiis. aliquam porro excepturi
                totam mollitia veritatis adipisci odio?
              </div>
              <div className="More">Learn More</div>
            </Col>
            <Col md={6} xs={12} className="About-Card">
              <Row>
                <Col
                  md={6}
                  xs={12}
                  className="Info-Card"
                  style={{ backgroundColor: "#f7420c" }}
                >
                  <FamilyRestroomIcon
                    className="Card-icon"
                    style={{ color: "#f7420c" }}
                  />
                  <div className="InfoHead">Family Gathering</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem impedit
                  </div>
                </Col>
                <Col
                  md={6}
                  xs={12}
                  className="Info-Card Right-Card"
                  style={{ backgroundColor: "#2e22ee" }}
                >
                  <HiveIcon
                    className="Card-icon"
                    style={{ color: "#2e22ee" }}
                  />
                  <div className="InfoHead">Green Areas</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem impedit
                  </div>
                </Col>
                <Col
                  md={6}
                  xs={12}
                  className="Info-Card"
                  style={{ backgroundColor: "#8834ec" }}
                >
                  <BusinessCenterIcon
                    className="Card-icon"
                    style={{ color: "#8834ec" }}
                  />
                  <div className="InfoHead">Business Areas</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem impedit
                  </div>
                </Col>
                <Col
                  md={6}
                  xs={12}
                  className="Info-Card Right-Card"
                  style={{ backgroundColor: "#4caf50" }}
                >
                  <DryCleaningIcon
                    className="Card-icon"
                    style={{ color: "#4caf50" }}
                  />
                  <div className="InfoHead">5 Star Service</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem impedit
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </motion.div>
  );
};

export default page;
