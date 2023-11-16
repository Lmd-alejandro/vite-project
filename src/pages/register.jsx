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
  User: "",
  email: "",
  CreatePassword: "",
  ConfirmPassword: "",
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
        Email: "Email Required or the email is invalid",
      }));
      return ;
    } else {
      setFormError((props) => ({
        ...props,
        Email: "",
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
      return  ;
    } else {
      console.log("hola")
      setFormError((props) => ({
        ...props,
        CreatePassword: "",
      }));
    }

    axios.post(`${baseUrl}/user/register`, form)
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
              required
              label="User"
              variant="filled"
              type="text"
              onChange={handleChange}
              name="User"
              fullWidth
            />
          </Stack>

          <Stack marginTop={10} spacing={3}>
            <TextField
              error={Boolean(formError.email)}
              helperText={formError.email}
              type="Email"
              onChange={handleChange}
              name="Email"
              fullWidth
              required
              label="Email"
              variant="filled"
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
            control={<Checkbox defaultChecked />}
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
