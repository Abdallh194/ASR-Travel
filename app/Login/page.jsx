"use client";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ActiveLoggin } from "../_Redux/features/StoreSlice";

const Login = () => {
  // states
  let [EnteredUserName, setEntredUser] = useState("");
  let [EnteredPassWord, setEnteredPass] = useState("");
  let [logginProccessSuccess, setlogginProccessSuccess] = useState(false);

  // dispatch
  let dispatch = useDispatch();

  let { userNameFromStore, PassWordFromStore, newuser } = useSelector(
    (s) => s.ASR
  );
  const router = useRouter();
  // handle Form

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (userNameFromStore === EnteredUserName &&
        PassWordFromStore === EnteredPassWord) ||
      (newuser.NewEmail === EnteredUserName &&
        newuser.NewPassword === EnteredPassWord)
    ) {
      dispatch(ActiveLoggin());
      setlogginProccessSuccess(false);
      router.push("/UserProfile");
    } else {
      setlogginProccessSuccess(true);
    }
  };
  return (
    <div className="Login">
      <Box
        className="logform"
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #f78536",
          width: 600,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#f78536" }} style={{ color: "white" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => {
              setEntredUser(e.target.value);
            }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => {
              setEnteredPass(e.target.value);
            }}
            autoComplete="current-password"
          />
          {logginProccessSuccess ? (
            <Alert
              severity="error"
              style={{ position: "absolute", top: "90px" }}
            >
              There is an error in some of your data. Please re-enter it.
            </Alert>
          ) : (
            ""
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#f78536" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" style={{ color: "#f78536" }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" style={{ color: "#f78536" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
