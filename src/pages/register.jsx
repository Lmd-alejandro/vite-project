import { Button, Stack, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";

const initValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  CreatePassword: "",
  ConfirmPassword: "",
};

function Register() {
  const [form, setForm] = useState(initValues);
  const [formError, setFormError] = useState(initValues);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm((props) => ({
      ...props,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(form);
    if (form.Email === "") {
      setFormError((props) => ({
        ...props,
        Email: "required",
      }));
    } else {
      setFormError((props) => ({
        ...props,
        Email: "",
      }));
    }
  };

  return (
    <>
      <Navbar />

      <Stack justifyContent="center" alignItems="center">
        <Stack width="100%" maxWidth="600px" spacing={5}>
          <Typography variant="h4" textAlign="center" paddingTop={10}>
            Sign Up
          </Typography>

          <Stack spacing={3} bgcolor={"#ffffff"} direction="row">
            <TextField
              required
              id="filled-basic-required"
              label="First Name"
              variant="filled"
              type="text"
              onChange={handleChange}
              name="First Name"
              fullWidth
            />

            <TextField
              required
              id="filled-basic-required"
              label="Last Name"
              variant="filled"
              type="text"
              onChange={handleChange}
              name="Last Name"
              fullWidth
            />
          </Stack>

          <Stack marginTop={10} spacing={3}>
            <TextField
              error={Boolean(formError.Email)}
              helperText={formError.Email}
              type="Email"
              onChange={handleChange}
              name="Email"
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
              onChange={handleChange}
              name="Create Password"
              fullWidth
            />

            <TextField
              required
              id="fillet-password-input-required"
              label="Confirm Password"
              type="Password"
              autoComplete="current-password"
              variant="filled"
              onChange={handleChange}
              name="Confirm Password"
              fullWidth
            />
          </Stack>
          <Button onClick={handleSubmit} size="large" variant="contained" fullWidth>
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
export default Register;
