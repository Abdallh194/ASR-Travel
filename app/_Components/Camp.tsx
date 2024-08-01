"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";
const Camp = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="Camp"
    >
      <Container>
        <Row>
          <Col md="6" xs="12" className="Camp-Card Camp-Card-image">
            <motion.img src={"/camp.jpg"} alt="camp" className="img-fluid" />
          </Col>
          <Col md="6" xs="12" className="Camp-Card">
            <motion.div>
              <div className="header">
                <b>Explore</b> The World One <b>Adventure</b> At a Time
              </div>
              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                dolor velit blanditiis. Deserunt tempora, eveniet soluta esse
                quis recusandae nihil sequi! Facere tempora repudiandae dolorum,
                reiciendis distinctio
              </div>
              <div className="details">
                <div className="socials">
                  <Link href="/Login" className="btn-readMore">
                    Read More
                  </Link>
                  <div className="socials-icon">
                    <a
                      href="https://twitter.com/AbdallhSabry9"
                      className="icon"
                      target="_blanck"
                    >
                      <TwitterIcon />
                    </a>
                    <a href="#s" className="icon">
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100007172563893"
                      target="_blanck"
                      className="icon"
                    >
                      <FacebookIcon />
                    </a>

                    <a
                      href="https://wa.me/+201091415560"
                      className="icon"
                      target="_blanck"
                    >
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <motion.img
                    src={"/camp.jpg"}
                    alt="camp"
                    className="img-fluid"
                  />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Camp;
