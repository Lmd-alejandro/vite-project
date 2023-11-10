import { Button, Stack, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
const Register = () => {
  return (
    <>
      <Navbar />

      <Stack justifyContent="center" alignItems="center">
        <Stack width="100%" maxWidth="600px" spacing={7} >
          <Typography variant="h4" textAlign="center" paddingTop={10}>
            Sign Up
          </Typography>

          <Stack spacing={3} bgcolor={"#ffffff"} direction="row">
            <TextField
              required
              id="filled-basic-required"
              label="First Name"
              variant="filled"
              fullWidth
            />

            <TextField
              required
              id="filled-basic-required"
              label="Last Name"
              variant="filled"
              fullWidth
            />
          </Stack>

          <Stack marginTop={10} spacing={3}>
            <TextField
              fullWidth
              required
              id="filled-basic-required"
              label="Email"
              variant="filled"
            />
          </Stack>

          <Stack marginTop={10} spacing={3} direction={"row"}>
            <TextField
              required
              id="filled-password-input/required"
              label="Create Password"
              type="Password"
              autoComplete="current-password"
              variant="filled"
              fullWidth
            />

            <TextField
              required
              id="fillet-password-input-required"
              label="Confirm Password"
              type="Password"
              autoComplete="current-password"
              variant="filled"
              fullWidth
            />
          </Stack>
        <Button size="large" variant="contained" fullWidth>
          Sign Up
        </Button>
        </Stack>
      </Stack>
    </>
  );
};
export default Register;
