import React from "react";
import { useSelector } from "react-redux";
import FlightIcon from "@mui/icons-material/Flight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Ticket = () => {
  const { BookDetails, SelectedTravel, newuser } = useSelector((s) => s.ASR);
  return (
    <div className="Ticket">
      <div className="header">
        <CheckCircleOutlineIcon /> Your Flight is Confirmed
      </div>
      <div className="content">
        <h3>
          <b>Boarding Pass</b>
        </h3>
        <div className="id">Booking Id : {BookDetails.BookId}</div>
        <div className="airports">
          <div className="dep">
            {BookDetails.Departureairport}
            <div className="time">
              {SelectedTravel.HourDep} : {SelectedTravel.MinuteDep}
            </div>
          </div>
          <div className="route">
            <div className="planeLine"></div>
            <FlightIcon fontSize="large" className="plane" />
            <div className="routeTime">
              {/*3 hours 25 minutes */}
              {SelectedTravel.HourArr - SelectedTravel.HourDep} Hours{" "}
              {SelectedTravel.MinuteArr - SelectedTravel.MinuteDep} minutes
            </div>
            <div className="stoped">Without stopping</div>
          </div>
          <div className="arr">
            {BookDetails.Arrivalirport}
            <div className="time">
              {SelectedTravel.HourArr} : {SelectedTravel.MinuteArr}
            </div>
          </div>
        </div>
        <div className="chechtime d-flex justify-content-between">
          <div className="chickin">
            <div className="Name">Departure</div>
            <div className="ticket-info">{BookDetails.CheckIn}</div>
          </div>
          <div className="chickin">
            <div className="Name">Return</div>
            <div className="ticket-info">{BookDetails.CheckOut}</div>
          </div>
        </div>
        <div className="passengers mt-3">
          <div className="Name">Passengers</div>
          <div className="ticket-info">
            This ticket includes both of the following
          </div>
          <div className="passernger-info">
            Mr : {newuser.NewFirstName} {newuser.NewLastName} ,{" "}
            {BookDetails.Adult} Adult , {BookDetails.Children} Children ,{" "}
            {BookDetails.Infant} Infant
          </div>
        </div>
        <div className="Name">Baggage</div>
        <div className="passernger-info">(1 * 32 KG)</div>
      </div>
    </div>
  );
};

export default Ticket;
