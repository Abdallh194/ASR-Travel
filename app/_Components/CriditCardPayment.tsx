"use client";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box } from "@mui/joy";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { ActiveBook } from "../_Redux/features/StoreSlice";

export default function CriditCardPayment({ TotalPrice }) {
  let [cardNumber, setcardNumber] = useState("");
  let [Expirydate, setExpirydate] = useState("");
  let [cvv, setcvv] = useState("");
  let [cardholder, setcardholder] = useState("");
  let router = useRouter();
  let dispatchEvent = useDispatch();
  return (
    <Card className="card-content">
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card number</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<CreditCardIcon />}
            onChange={(e) => {
              setcardNumber(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<CreditCardIcon />}
            onChange={(e) => {
              setExpirydate(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<InfoOutlined />}
            onChange={(e) => {
              setcvv(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card holder name</FormLabel>
          <Input
            className="input"
            placeholder="Enter cardholder's full name"
            onChange={(e) => {
              setcardholder(e.target.value);
            }}
          />
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: "1/-1", my: 1 }} />
        <Box className="info" sx={{ gridColumn: "1/-1" }}>
          Card details are stored for subscription renewals and future
          purchases. Card is validated with a temporary $0.50 hold, released
          after a few days
        </Box>
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              if (
                cardholder.length > 0 &&
                cvv.length > 0 &&
                Expirydate.length > 0 &&
                cardNumber.length > 0
              ) {
                dispatchEvent(ActiveBook(TotalPrice));
                router.push("/UserProfile#Tickit");
              } else {
                console.log(TotalPrice, false);
              }
            }}
          >
            Add card
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
