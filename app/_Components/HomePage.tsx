"use client";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import HomeForm from "./HomeForm";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
import Link from "next/link";
const HomePage = () => {
  const [value, setValue] = React.useState<number | null>(5);
  return (
    <div className="HomePage">
      <div className="overlay">
        <Container>
          <Row className="reverse-Flex-InMbileView">
            <Col md={6} xs={12} className="HomePage-card Form-Section">
              <HomeForm />
            </Col>
            <Col md={6} xs={12} className="HomePage-card Text-Section">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div className="main-header">Exclusive Limited Time Offer</div>
                <div className="sub-header">
                  Fly to Hong Kong via Cairo, EGY only $599
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit est facilis maiores, perspiciatis accusamus asperiores
                  sint consequuntur debitis.
                </div>
                <div className="stars">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
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
                <Link href="/Login" className="download">
                  Get Started
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
