import { InputAdornment, Stack, TextField, Typography} from "@mui/material"
import Navbar from "../components/Navbar"
import AccountCircle from '@mui/icons-material/AccountCircle';
const Register = () => {
    return (
        <>
        <Navbar />
        <Stack spacing={2} alignItems={'center'} marginTop={10} justifyContent={"center"} >
        <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
            <TextField
          id="outlined-disabled"
          label="First Name"
          
          
        />


        <TextField
          id="outlined-disabled"
          label="Last Name"
          
        />
        <TextField
          id="outlined-disabled"
          label="Email"
          
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="Password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Re-typePassword"
          type="Password"
          autoComplete="current-password"
        />
            </Stack>
        </>
    )
}
export default Register