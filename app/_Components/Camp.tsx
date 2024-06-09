import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
const Camp = () => {
  return (
    <div className="Camp">
      <Container>
        <Row>
          <Col md="6" xs="12" className="Camp-Card Camp-Card-image">
            <Image
              src={"/camp.jpg"}
              alt="camp"
              width={650}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col md="6" xs="12" className="Camp-Card">
            <div className="header">
              <b>Explore</b> The World One <b>Adventure</b> At a Time
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              dolor velit blanditiis. Deserunt tempora, eveniet soluta esse quis
              recusandae nihil sequi! Facere tempora repudiandae dolorum,
              reiciendis distinctio
            </div>
            <div className="details">
              <div className="socials">
                <div className="btn-readMore">Read More</div>
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
                <Image
                  src={"/camp.jpg"}
                  alt="camp"
                  width={300}
                  height={100}
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Camp;
