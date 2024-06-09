"use client";

import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/page";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  ActiveLogout,
  ActivePassportDetails,
  AddPassportDetails,
  DeleteTicket,
} from "../_Redux/features/StoreSlice";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import Ticket from "../_Components/Ticket";
import DeleteIcon from "@mui/icons-material/Delete";
const page = () => {
  const {
    isLoggin,
    newuser,
    PassportDetails,
    validPassportData,
    BookDetails,
    flightbookedsuccessfully,
  } = useSelector((s) => s.ASR);
  //Passport data
  const [Nationality, setNationality] = useState("");
  const [Passportnumber, setPassportnumber] = useState("");
  const [placeofissue, setplaceofissue] = useState("");
  const [PassportExpiration, setPassportExpiration] = useState(
    dayjs("2000-07-01")
  );
  const [ValidPassportData, setValidPassportData] = useState(false);
  const router = useRouter();
  let dispatch = useDispatch();
  return (
    <div>
      {isLoggin ? (
        <div className="UserProfile">
          <Container>
            <div className="head">Personal Details</div>
            <div className="info">
              Please update your data regularly so that you do not miss out on
              news, offers and services.
            </div>

            <div className="personalDetails">
              <div className="detailsHeader">Contact Data</div>
              <Button
                className="logout"
                endIcon={<LogoutIcon />}
                onClick={() => {
                  router.push("/");
                  dispatch(ActiveLogout());
                }}
              >
                Logout
              </Button>
              <div className="line"></div>
              <h4>Personal Details</h4>
              <div className="detSection d-flex justify-content-between">
                <div className="frName">
                  <div className="name">First Name</div>
                  {newuser.NewFirstName}
                </div>
                <div className="lstName">
                  <div className="name">Last Name</div>
                  {newuser.NewLastName}
                </div>
                <div className="date">
                  <div className="name">Date of birth</div>
                  {/* {newuser.NewBirthday.$D}-{newuser.NewBirthday.$M}-
                  {newuser.NewBirthday.$y} */}
                  01-07-2000
                </div>
              </div>
              <hr />
              <div className="name">Email</div>
              <p>{newuser.NewEmail}</p>
              <hr />
              <h4>phone number</h4>
              <div className="detSection d-flex justify-content-between">
                <div className="">
                  <div className="name">Mobile (preferred contact)</div>
                  {newuser.NewPhone}
                </div>
                <div className="">
                  <div className="name">Home Number</div>
                  <div
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    className="link"
                  >
                    Add your home phone number
                  </div>
                </div>
                <div className="">
                  <div className="name">Work Number</div>
                  <div
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    className="link"
                  >
                    Add your home phone number
                  </div>
                </div>
              </div>
              <hr />
              <h4>the address</h4>
              <div className="detSection d-flex justify-content-between">
                <div className="">
                  <div className="name">Country</div>
                  {newuser.NewCountry}
                </div>
                <div className="">
                  <div className="name">Preferred Language</div>
                  Arabic
                </div>
              </div>
              <hr />
              <div className="detailsHeader mt-5">Passport data</div>
              <div className="line"></div>
              <div className="desc">
                Providing your passport details will facilitate the online
                booking process
              </div>
              {validPassportData ? (
                <div
                  className="detSection d-flex justify-content-between "
                  style={{ marginTop: "14px" }}
                >
                  <div className="">
                    <div className="name">Nationality</div>
                    {PassportDetails.Nationality}
                  </div>
                  <div className="">
                    <div className="name">Passport Number</div>
                    {PassportDetails.Passportnumber}
                  </div>
                  <div className="">
                    <div className="name">Passport Expiration</div>
                    {PassportDetails.PassportExpiration.$D}-
                    {PassportDetails.PassportExpiration.$M + 1}-
                    {PassportDetails.PassportExpiration.$y}
                  </div>
                  <div className="">
                    <div className="name">place of Issue</div>
                    {PassportDetails.placeofissue}
                  </div>
                </div>
              ) : (
                <Box
                  component="form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (
                      Nationality.length > 0 &&
                      Passportnumber.length > 0 &&
                      placeofissue.length > 0
                    ) {
                      let data = {
                        Nationality,
                        Passportnumber,
                        PassportExpiration,
                        placeofissue,
                      };
                      dispatch(ActivePassportDetails());
                      dispatch(AddPassportDetails(data));
                      setValidPassportData(true);
                    } else {
                      setValidPassportData(false);
                    }
                  }}
                  noValidate
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="Nationality"
                        name="Nationality"
                        fullWidth
                        id="Nationality"
                        label="Nationality"
                        onChange={(e) => {
                          setNationality(e.target.value);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="Passportnumber"
                        label="Passport Number"
                        name="Passportnumber"
                        autoComplete="Passport Number"
                        onChange={(e) => {
                          setPassportnumber(e.target.value);
                        }}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DatePicker", "DatePicker"]}
                        >
                          <DatePicker
                            label="Passport Expiration"
                            onChange={(e) => setPassportExpiration(e)}
                            className=""
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        type="text"
                        required
                        fullWidth
                        id="placeofissue"
                        label="place of Issue"
                        name="placeofissue"
                        autoComplete="place of Issue"
                        onChange={(e) => {
                          setplaceofissue(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#f78536" }}
                  >
                    Save
                  </Button>
                </Box>
              )}
              <div className="booksTrips">
                <div className="detailsHeader mt-5">Booked flights</div>
                <div className="line"></div>
                {BookDetails.Departureairport.length > 1 &&
                flightbookedsuccessfully.isSuccess == true ? (
                  <div id="Tickit">
                    <Ticket />

                    {BookDetails.Departureairport.length > 1 &&
                    flightbookedsuccessfully.isSuccess == true ? (
                      <div className="dlt">
                        <div className="detailsHeader" style={{ color: "Red" }}>
                          Cancel This ticket?
                        </div>
                        <div className="dlt-Details d-flex justify-content-between align-items-center">
                          <div className="name mt-None-MobileView">
                            Delete Ticket
                          </div>
                          <Button
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => {
                              dispatch(DeleteTicket());
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      "false"
                    )}
                  </div>
                ) : BookDetails.Departureairport.length > 1 &&
                  flightbookedsuccessfully.isSuccess == false ? (
                  <div>
                    Show Search Result <Link href="/Results">From Her</Link>
                  </div>
                ) : (
                  <p style={{ color: "red" }}>
                    There are no flights booked now{" "}
                    <Link href="/Book">Book Now</Link>
                  </p>
                )}
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default page;
