import {
  Button,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

const initValues = {
  email: "",
  CreatePassword: "",
  ConfirmPassword: "",
  username: "",
  isAdmin: true
};

const baseUrl ="https://api.jedidiazfagundez.site/api"

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
    const emailRegEx = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
    if (form.email === "" || !emailRegEx.test(form.email)) {
      setFormError((props) => ({
        ...props,
        email: "Email Required or the email is invalid",
      }));
    } else {
      setFormError((props) => ({
        ...props,
        email: "",
      }));
    }

    if (
      form.CreatePassword === "" ||
      form.ConfirmPassword === "" ||
      form.ConfirmPassword !== form.CreatePassword
    ) {
      setFormError((props) => ({
        ...props,
        CreatePassword: "Required and the password must be equal",
      }));
    } else {
      setFormError((props) => ({
        ...props,
        CreatePassword: "",
      }));
    }

    if (form.username.length <= 3){
       setFormError((props) => ({
        ...props,
        username: "Required User",
      }));
    } else {
      setFormError((props) => ({
        ...props,
        username: "",
      }));
    }
if(formError.username === "" || formError.email === "" || formError.CreatePassword === "") 
    axios.post(`${baseUrl}/user/register`, {
      username: form.username,
      password: form.CreatePassword,
      email: form.email,
      role: form.isAdmin ? "admin" : "user"
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  };

  return (
    <>
      <Navbar />

      <Stack justifyContent="center" alignItems="center">
        <Stack width="100%" maxWidth="600px" spacing={5}>
          <Typography variant="h4" textAlign="center" paddingTop={3}>
            Sign Up
          </Typography>

          <Stack spacing={3} bgcolor={"#ffffff"} direction="row">
            
            <TextField
              error={Boolean(formError.username)}
              helperText={formError.username}
              required
              label="User"
              variant="filled"
              type="text"
              onChange={handleChange}
              name="username"
              fullWidth
            />
          </Stack>

          <Stack marginTop={10} spacing={3}>
            <TextField
              error={Boolean(formError.email)}
              helperText={formError.email}
              required
              label="Email"
              variant="filled"
              type="Email"
              onChange={handleChange}
              name="email"
              fullWidth
            />
          </Stack>

          <Stack marginTop={10} spacing={3} direction={"row"}>
            <TextField
              required
              error={Boolean(formError.CreatePassword)}
              helperText={formError.CreatePassword}
              label="Create Password"
              type="Password"
              autoComplete="current-password"
              variant="filled"
              onChange={handleChange}
              name="CreatePassword"
              fullWidth
            />

            <TextField
              required
              error={Boolean(formError.ConfirmPassword)}
              helperText={formError.ConfirmPassword}
              label="Confirm Password"
              type="Password"
              autoComplete="current-password"
              variant="filled"
              onChange={handleChange}
              name="ConfirmPassword"
              fullWidth
            />
          </Stack>

          <FormControlLabel name="isAdmin" onChange={handleChange}
            control={<Checkbox  />}
            label="Admin"
          />

          <Button
            onClick={handleSubmit}
            size="large"
            variant="contained"
            fullWidth
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
export default Register;
