"use client";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import HomeForm from "./HomeForm";

import { Rating } from "@mui/material";
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
              <div className="main-header">Exclusive Limited Time Offer</div>
              <div className="sub-header">
                Fly to Hong Kong via Cairo, EGY only $599
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                est facilis maiores, perspiciatis accusamus asperiores sint
                consequuntur debitis.
              </div>
              <div className="stars">
                {/* {Array(5)
                  .fill(1)
                  .map((e) => {
                    return <StarRateIcon style={{ color: "yellow" }} />;
                  })}{" "} */}

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

              <div className="download">DownLoad App</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
