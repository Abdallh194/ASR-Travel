"use client";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HorizontalNonLinearStepper from "../_Components/Steper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

import FlightIcon from "@mui/icons-material/Flight";
import Login from "../Login/page";
import { SetTravelTime } from "../_Redux/features/StoreSlice";
import { TextField } from "@mui/material";
import CriditCardPayment from "../_Components/CriditCardPayment";
const page = () => {
  const { isLoggin, BookDetails, newuser } = useSelector((s) => s.ASR);
  const [FinshDateTime, setFinshDateTime] = useState(false);
  let dispatch = useDispatch();
  var randomHour = require("random-hour");
  var randomMinute = require("random-minute");

  const TravelDetails = ({
    MinHourDep,
    MinHourArr,
    MaxHourArr,
    MinMinuteArr,
    MaxMinuteArr,
    MaxHourDep,
    MinMinuteDep,
    MaxMinuteDep,
  }) => {
    const HourDep = randomHour({ min: MinHourDep, max: MaxHourDep });
    const MinuteDep = randomMinute({ min: MinMinuteDep, max: MaxMinuteDep });
    const HourArr = randomHour({ min: MinHourArr, max: MaxHourArr });
    const MinuteArr = randomMinute({ min: MinMinuteArr, max: MaxMinuteArr });
    return (
      <div className="TravelDetails">
        <div className="TravelTime">
          <div className="Departureairport">
            {BookDetails.Departureairport}
            <div className="time">
              {HourDep} : {MinuteDep}
            </div>
          </div>
          <div className="route">
            <div className="planeLine"></div>
            <FlightIcon fontSize="large" className="plane" />
            <div className="routeTime">
              {/*3 hours 25 minutes */}
              {HourArr - HourDep} Hours {MinuteArr - MinuteDep} minutes
            </div>
            <div className="stoped">Without stopping</div>
          </div>
          <div className="Arrivalairport">
            {BookDetails.Arrivalirport}
            <div className="time">
              {HourArr} : {MinuteArr}
            </div>
          </div>
        </div>
        <div className="TravelClasses">
          <div className="class1 class">
            <div className="classType">Economy Class</div>
            <p className="egp mt-3">from EGP</p>
            <p className="price"> 8,032</p>
            <div className="arrow">
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
          </div>
          <div className="class2 class">
            <div className="classType">Distinctive Tourism</div>
            <p className="egp mt-3">from EGP</p>
            <p className="price"> 31,650</p>
            <div className="arrow">
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
          </div>
          <div className="class3 class">
            <div className="classType">Business Class</div>
            <p className="egp mt-3">from EGP</p>
            <p className="price"> 91,544</p>
            <div className="arrow">
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
          </div>
        </div>
        <div className="choseTravel">
          <div
            className="bookicon"
            onClick={() => {
              let data = {
                HourDep,
                HourArr,
                MinuteArr,
                MinuteDep,
              };
              dispatch(SetTravelTime(data));
              setFinshDateTime(true);
            }}
          >
            Select
          </div>
        </div>
      </div>
    );
  };
  const ResultCard = () => {
    let AdultPrice = 100;
    let ChildrenPrice = 70;
    let infantPrice = 50;
    let TotalPrice = () => {
      const Total =
        AdultPrice * BookDetails.Adult +
        BookDetails.Children * ChildrenPrice +
        BookDetails.Infant * infantPrice;
      return Total + 200 + 8032;
    };
    return (
      <div className="Result">
        <Container>
          <div className="header">Booking Procedures</div>
          <HorizontalNonLinearStepper />
          <div className="travelDevider">
            <ConnectingAirportsIcon fontSize="large" /> Departure ,{" "}
            {BookDetails.Departureairport} to {BookDetails.Arrivalirport}{" "}
          </div>

          {FinshDateTime ? (
            <Row>
              <Col md={6} xs={12} className="bill-info">
                <h5>What will be the initial payment? </h5>
                <div className="price">
                  8,032 <span>EGP</span>
                </div>
                <h6
                  style={{
                    textDecoration: "underline",
                    marginTop: "17px",
                    fontSize: "18px ",
                  }}
                >
                  What's Include?
                </h6>
                <div className="billsHeader d-flex justify-content-between">
                  <div className="">
                    <div className="bildetails">
                      Number {BookDetails.Adult} Adult ( {BookDetails.Adult} *{" "}
                      {AdultPrice} )
                    </div>
                    <div className="bildetails">
                      Number {BookDetails.Children} Children ({" "}
                      {BookDetails.Children} * {ChildrenPrice})
                    </div>
                    <div className="bildetails">
                      Number {BookDetails.Infant} Infant ( {BookDetails.Infant}{" "}
                      * {infantPrice})
                    </div>
                    <div className="bildetails">
                      Class : {BookDetails.Class}
                    </div>
                  </div>
                  <div className="" style={{ textAlign: "right" }}>
                    <div className="bildetails">
                      {BookDetails.Adult * AdultPrice} EGP
                    </div>
                    <div className="bildetails">
                      {BookDetails.Children * ChildrenPrice} EGP
                    </div>
                    <div className="bildetails">
                      {BookDetails.Infant * infantPrice} EGP
                    </div>
                    <div className="bildetails">300 EGP</div>
                  </div>
                </div>
                <div className="billsHeader d-flex justify-content-between mt-4">
                  <div className="">Basic</div>
                  <div className="">8,032 EGP</div>
                </div>
                <hr />
                <div className="billsHeader d-flex justify-content-between">
                  <div className="">SubTotal</div>
                  <div className="">0.00 EGP</div>
                </div>
                <hr />
                <div className="billsHeader d-flex justify-content-between">
                  <div className="">Total</div>
                  <div className="">
                    <div className="">{TotalPrice()} EGP</div>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12} className="bill-info  bill-form">
                <h3>Billing Information</h3>
                <p>Plase Enter Your Payment Information</p>

                <p style={{ fontSize: "18px" }}>Contact Ionformation</p>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={newuser.NewEmail}
                />
                <hr />
                <CriditCardPayment TotalPrice={TotalPrice()} />
              </Col>
            </Row>
          ) : (
            <>
              <div className="dateNow">
                Reservations available for your category on
                <b>{BookDetails.CheckIn}</b>
              </div>
              <TravelDetails
                MinHourDep={2}
                MaxHourDep={5}
                MinHourArr={6}
                MaxHourArr={12}
                MinMinuteDep={10}
                MaxMinuteDep={30}
                MinMinuteArr={30}
                MaxMinuteArr={60}
              />
              <TravelDetails
                MinHourDep={5}
                MaxHourDep={7}
                MinHourArr={8}
                MaxHourArr={12}
                MinMinuteDep={40}
                MaxMinuteDep={50}
                MinMinuteArr={50}
                MaxMinuteArr={60}
              />
              <TravelDetails
                MinHourDep={1}
                MaxHourDep={3}
                MinHourArr={5}
                MaxHourArr={7}
                MinMinuteDep={1}
                MaxMinuteDep={5}
                MinMinuteArr={30}
                MaxMinuteArr={34}
              />
              <TravelDetails
                MinHourDep={3}
                MaxHourDep={4}
                MinHourArr={5}
                MaxHourArr={7}
                MinMinuteDep={5}
                MaxMinuteDep={7}
                MinMinuteArr={55}
                MaxMinuteArr={59}
              />
              <TravelDetails
                MinHourDep={9}
                MaxHourDep={11}
                MinHourArr={11}
                MaxHourArr={12}
                MinMinuteDep={17}
                MaxMinuteDep={25}
                MinMinuteArr={30}
                MaxMinuteArr={44}
              />
            </>
          )}
        </Container>
      </div>
    );
  };

  return <div>{isLoggin ? <ResultCard /> : <Login />}</div>;
};

export default page;
