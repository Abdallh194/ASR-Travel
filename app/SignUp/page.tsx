"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Alert } from "@mui/material";
import Link from "next/link";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { AddNewUser } from "../_Redux/features/StoreSlice";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const SignUp = () => {
  // catch input data

  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Country, setCountry] = React.useState("");
  const [BirthDate, setBirthDate] = React.useState(dayjs("2000-07-01"));
  let [logginProccessSuccess, setlogginProccessSuccess] = React.useState(false);
  const router = useRouter();
  let dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      FirstName.length > 0 &&
      LastName.length > 0 &&
      Email.length > 0 &&
      Password.length > 0 &&
      Phone.length > 0 &&
      Country.length > 0
    ) {
      let data = {
        NewFirstName: FirstName,
        NewLastName: LastName,
        NewPhone: Phone,
        NewEmail: Email,
        NewPassword: Password,
        NewCountry: Country,
        NewBirthday: BirthDate,
      };
      dispatch(AddNewUser(data));
      setlogginProccessSuccess(false);
      router.push("/Login");
    } else {
      setlogginProccessSuccess(true);
      console.log("errorrrr");
    }
  };
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        marginTop: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="signupForm"
    >
      <Avatar sx={{ m: 1, bgcolor: "#f78536" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="number"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="Phone Numbe"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="birthday"
                  onChange={(e) => setBirthDate(e)}
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
              id="Country"
              label="Country"
              name="phone"
              autoComplete="Country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#f78536" }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/Login" style={{ color: "#f78536" }}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
        {logginProccessSuccess ? (
          <Alert severity="error" style={{ position: "absolute", top: "90px" }}>
            There is an error in some of your data. Please re-enter it.
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </motion.div>
  );
};

export default SignUp;
