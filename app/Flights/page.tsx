"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StarRateIcon from "@mui/icons-material/StarRate";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Plans from "../_Components/Plans";
import Link from "next/link";

import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="Flights"
    >
      <Container fluid>
        <Row>
          <Col md={6} xs={12} className="flights-card Text-card">
            <div className="content">
              <div className="header">Best Experiences In Cairo for free</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quo commodi perspiciatis voluptas debitis fuga asperiores
                voluptatum vero quas minima velit perferendis impedit ratione
                quaerat, eos, reiciendis repudiandae aspernatur mollitia.
              </div>
              <div className="stars d-flex mt-4">
                {Array(5)
                  .fill(1)
                  .map((e) => {
                    return <StarRateIcon style={{ color: "#ead400" }} />;
                  })}{" "}
                <div
                  style={{
                    marginLeft: "5px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  210k{" "}
                  <span
                    style={{ textDecoration: "underline", marginLeft: "2px" }}
                  >
                    Good Reviews
                  </span>
                </div>
              </div>
              <Link href="/Book" className="howWork">
                <PlayCircleIcon /> Start Search
              </Link>
            </div>
          </Col>
          <Col md={6} xs={12} className="flights-card image-card">
            <Image
              src="/flights.png"
              alt="hero-bg"
              className="img-fluid"
              width={1200}
              height={800}
            />
            <div className="locations">
              <div className="l-1">
                <div className="lable">Location</div>
                <div className="name">Venice , Italy</div>
              </div>
              <div className="d-flex justify-content-between btm-loc">
                <div className="l-1">
                  <div className="lable">Distance</div>
                  <div className="name">137.28 ml</div>
                </div>
                <div className="l-1">
                  <div className="lable">Elevation</div>
                  <div className="name">2.040 km</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Plans />
      </Container>
    </motion.div>
  );
};

export default page;
