"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
const ClintCard = ({ msg, clientName }) => {
  return (
    <Col md={4} xs={12} className="HappyClients-card">
      <div className="msg">
        <FormatQuoteIcon /> {msg} <FormatQuoteIcon fontSize="small" />
      </div>
      <div className="clientName">
        <span>{clientName} </span>: ASRTravel.com
      </div>
      <div className="Creative">Creative Director</div>
      <div className="qoues">
        <FormatQuoteIcon fontSize="large" />
      </div>
    </Col>
  );
};

const HappyClients = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="HappyClients"
    >
      <Container>
        <div className="header">Clients Reviews</div>
        <Row>
          <ClintCard
            msg="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam odio sunt, laudantium recusandae, reprehenderit, soluta excepturi quod nisi aut quam aliquid voluptatem mollitia voluptates commodi rem quis ut dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam odio sunt, laudantium recusandae, reprehenderit, soluta"
            clientName="Abdallh Sabry"
          />
          <Col md={4} xs={12} className="HappyClients-card Center-Card">
            <div className="msg">
              <FormatQuoteIcon /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure magnam, soluta nihil dolores, esse sunt aut
              nam mollitia ipsa eveniet blanditiis voluptates illo ab optio
              eligendi obcaecati veniam. Veritatis, magni! <FormatQuoteIcon />
            </div>
            <div className="clientName">
              <span>Ahmed Mohamed</span> : ASRTravel.com
            </div>
            <div className="Creative">Creative Director</div>
            <div className="qoues">
              <FormatQuoteIcon fontSize="large" />
            </div>
          </Col>
          <ClintCard
            msg="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam odio sunt, laudantium recusandae, reprehenderit, soluta excepturi quod nisi aut quam aliquid voluptatem mollitia voluptates commodi rem quis ut dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam odio sunt, laudantium recusandae, reprehenderit, soluta"
            clientName="Shehap Sabry"
          />
        </Row>
      </Container>
    </motion.div>
  );
};

export default HappyClients;
