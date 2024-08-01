"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConfirmContact from "../_Components/Modal";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
const page = () => {
  const [showModal, setshowModal] = useState(false);
  const handleShow = () => setshowModal(true);
  const [username, setusername] = useState(null);
  const [email, setemail] = useState(null);
  const [msg, setmsg] = useState(null);
  console.log(showModal);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="Customer-Service"
    >
      <Container>
        <div className="header">Contact Information</div>
        <div className="desc">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </div>
        <div className="line"></div>
        <Row>
          <Col md="6" xs="12" className="Contact-Card">
            <div className="card-header">Our Address</div>
            <div className="crad-desc">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </div>
            <div className="card-details">
              <div className="details">
                <WhereToVoteIcon /> {"  "}
                21th Street, 721 Tanta Egy 141556
              </div>
              <div className="details">
                <CallIcon /> {"  "} +201091415560
              </div>
              <div className="details">
                <EmailIcon />
                {"  "}
                Abdallhsabry194@gmail.com
              </div>
              <div className="details">
                <LanguageIcon /> {"  "} www.ASRTravel.com
              </div>
            </div>
          </Col>
          <Col md="6" xs="12" className="Contact-Card">
            <div className="text-feild">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />

              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <textarea
              name="msg"
              id="msg"
              placeholder="Message"
              className="form-control"
              onChange={(e) => {
                setmsg(e.target.value);
              }}
            ></textarea>
            <input
              type="submit"
              id="submit"
              className="form-control"
              value="Submit"
              onClick={handleShow}
            />
            {showModal === false ? (
              ""
            ) : (
              <ConfirmContact
                showModal={showModal}
                Username={username}
                Email={email}
              />
            )}{" "}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default page;
