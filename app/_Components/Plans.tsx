import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HiveIcon from "@mui/icons-material/Hive";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HailIcon from "@mui/icons-material/Hail";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Link from "next/link";
const PlanCard = ({ Icon, header, desc }) => {
  return (
    <Col md={4} xs={12} className="Plan-Card">
      <Icon className="icon" />
      <div className="details">
        <div className="header">{header}</div>
        <div className="desc">{desc}</div>
        <div className="more">Learn More</div>
      </div>
    </Col>
  );
};

const Plans = () => {
  return (
    <div className="Plans">
      <Container>
        {/* chose Plane carda  */}
        <div className="head">Choose The Best Plan For You</div>
        <div className="info">
          Join over 1 Million of users. Dignissimos asperiores vitae velit
          veniam totam fuga molestias accusamus alias autem provident. Odit ab
          aliquam dolor eius.
        </div>
        <Row>
          <Col md={4} xs={12} className="chooseCard">
            <div className="pricePlane">STARTER</div>
            <div className="price">
              <sup className="currency">$</sup>50 <small>/ mo</small>
            </div>
            <p>
              Basic customer support for small business Aut cum mollitia
              reprehenderit
            </p>
            <hr />
            <div className="priceInfo">
              <div>10 projects</div>
              <div>20 Pages</div>
              <div>20 Emails</div>
              <div>100 Images</div>
            </div>
            <Link href="/Login" className="getstart">
              Get Started
            </Link>
          </Col>
          <Col md={4} xs={12} className="chooseCard">
            <div className="pricePlane">REGULAR</div>
            <div className="price">
              <sup className="currency">$</sup>70 <small>/ mo</small>
            </div>
            <p>
              Basic customer support for small business Aut cum mollitia
              reprehenderit
            </p>
            <hr />
            <div className="priceInfo">
              <div>15 projects</div>
              <div>40 Pages</div>
              <div>40 Emails</div>
              <div>200 Images</div>
            </div>
            <Link href="/Login" className="getstart">
              Get Started
            </Link>
          </Col>
          <Col md={4} xs={12} className="chooseCard ActiveCard">
            <div className="pricePlane">PLUS</div>
            <div className="price">
              <sup className="currency">$</sup>109 <small>/ mo</small>
            </div>
            <p>
              Basic customer support for small business Aut cum mollitia
              reprehenderit
            </p>
            <hr />
            <div className="priceInfo">
              <div>Unlimitted projects</div>
              <div>100 Pages</div>
              <div>100 Emails</div>
              <div>700 Images</div>
            </div>
            <Link href="/Login" className="getstart">
              Get Started
            </Link>
            <div className="Popular">Popular</div>
          </Col>
        </Row>
      </Container>
      <div className="PlanInfo">
        <Container>
          <Row>
            <PlanCard
              Icon={FamilyRestroomIcon}
              header="Family Travel"
              desc="acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit"
            />
            <PlanCard
              Icon={FlightTakeoffIcon}
              header="Travel Plans"
              desc="acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit"
            />
            <PlanCard
              Icon={HiveIcon}
              header="Honeymoon"
              desc="acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit"
            />
            <PlanCard
              Icon={BusinessCenterIcon}
              header="Business Travel"
              desc="acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit"
            />
            <PlanCard
              Icon={HailIcon}
              header="Solo Travel"
              desc="acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit"
            />
            <PlanCard
              Icon={TravelExploreIcon}
              header="Explorer"
              desc="acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit "
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Plans;
