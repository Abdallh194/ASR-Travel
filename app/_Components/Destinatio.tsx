"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const DestinationCard = ({ md, title, src }) => {
  return (
    <Col md={md} sm={6} xs={12} className="Destinatio-Card">
      <div className="over-lay">
        <motion.img
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={src}
          alt="camp city"
          width={500}
          height={315}
          className="img-fluid"
        />
        <div className="title">{title}</div>
        <div className="border-box "></div>
      </div>
    </Col>
  );
};

const Destinatio = () => {
  return (
    <div className="Destinatio">
      <Container fluid>
        <Row>
          <DestinationCard md={3} title="Venice" src="/city1.jpg" />
          <DestinationCard md={3} title="Kyoto" src="/city2.jpg" />
          <DestinationCard md={3} title="Cape Town" src="/city3.jpg" />
          <DestinationCard md={3} title="Cairo" src="/city4.jpg" />
          <DestinationCard md={3} title="Hoi An" src="/city5.jpg" />
          <Col md={6} sm={6} xs={12} className="Destinatio-Card Center-Card">
            <div className="header">Most Popular Destinations</div>
            <div className="view">View All Destinations</div>
          </Col>
          <DestinationCard md={3} title="Sydney" src="/city6.jpg" />
          <DestinationCard md={3} title="Mexico City" src="/city7.jpg" />
          <DestinationCard md={3} title="New York" src="/city8.jpg" />
          <DestinationCard md={3} title="Rio de Janeiro" src="/city9.jpg" />
          <DestinationCard md={3} title="Singapore" src="/city10.jpg" />
        </Row>
      </Container>
    </div>
  );
};

export default Destinatio;
