"use client";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../Login/page";
import { Col, Container, Row } from "react-bootstrap";
import HomeForm from "../_Components/HomeForm";
import Image from "next/image";

const page = () => {
  const { isLoggin } = useSelector((s) => s.ASR);

  return (
    <div>
      {isLoggin ? (
        <div className="Book">
          <div className="content">
            <Container>
              <div className="overlay">
                <div className="header-content">
                  <div className="head">Book Flights</div>
                  <div className="desc">
                    Explore our itineraries around the world and find the flight
                    time that suits you in our schedules
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <Container className="book-container">
            <HomeForm />
          </Container>
          <div className="enjoy">
            <Container>
              <Row>
                <Col md={6} xs={12} className="EnjoyCard textCard">
                  <div className="cardHeader">
                    Best Experiences In Cairo , Discover Cairo
                  </div>
                  <div className="cardDesc">
                    Discover the ASR TRAVEL experience and plan an unforgettable
                    trip in all its stages. fugiat distinctio facere rem archi
                    tecto, non praesentium, odit corporis exercitationem error
                    doloribus nemo culpa quae possimus
                  </div>
                  <div className="learn">Learn More</div>
                </Col>
                <Col md={3} xs={12} className="EnjoyCard ImageCard Cus-img">
                  <Image
                    src={"/cairo2.jpg"}
                    alt="city4"
                    className="img-fluid "
                    width={650}
                    height={300}
                  />
                </Col>
                <Col
                  md={3}
                  xs={12}
                  className="EnjoyCard ImageCard d-none-MobileView"
                ></Col>
                <Col
                  md={3}
                  xs={12}
                  className="EnjoyCard ImageCard d-none-MobileView"
                ></Col>
                <Col md={3} xs={12} className="EnjoyCard ImageCard">
                  <Image
                    src={"/cairo1.jpg"}
                    alt="city4"
                    className="img-fluid"
                    width={650}
                    height={300}
                  />
                </Col>
                <Col md={6} xs={12} className="EnjoyCard Cus-mr">
                  <Image
                    src={"/city4.jpg"}
                    alt="city4"
                    className="img-fluid"
                    width={650}
                    height={300}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="Info">
            <Container>
              <Row>
                <Col md={3} xs={12} className="Info-Card">
                  <Image
                    src={"/info_01.jpg"}
                    alt="info"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                  <div className="cardHead">Our Business</div>
                </Col>
                <Col md={3} xs={12} className="Info-Card">
                  <Image
                    src={"/info_02.jpg"}
                    alt="info"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                  <div className="cardHead">Our Planet</div>
                </Col>
                <Col md={3} xs={12} className="Info-Card">
                  <Image
                    src={"/info_03.jpg"}
                    alt="info"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                  <div className="cardHead">Our Staff</div>
                </Col>
                <Col md={3} xs={12} className="Info-Card">
                  <Image
                    src={"/info_04.jpg"}
                    alt="info"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                  <div className="cardHead">Our local communities</div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default page;
