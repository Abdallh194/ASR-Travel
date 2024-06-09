import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
    <div className="HappyClients">
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
              <span>Ahmed Moataz</span> : ASRTravel.com
            </div>
            <div className="Creative">Creative Director</div>
            <div className="qoues">
              <FormatQuoteIcon fontSize="large" />
            </div>
          </Col>
          <ClintCard
            msg="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam odio sunt, laudantium recusandae, reprehenderit, soluta excepturi quod nisi aut quam aliquid voluptatem mollitia voluptates commodi rem quis ut dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam odio sunt, laudantium recusandae, reprehenderit, soluta"
            clientName="Shebiny"
          />
        </Row>
      </Container>
    </div>
  );
};

export default HappyClients;
