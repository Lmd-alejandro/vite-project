import Stack from '@mui/material/Stack';
import Img from "../assets/cristiano.webp"
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <Stack width={"100%"} padding={"10px"} bgcolor={"#6DCAF5"} direction="row" justifyContent={'space-between'} >
          <Stack width={"50px"} >
          <img src={Img} style={{
            borderRadius: "100px"
          }}  ></img>
          </Stack>
          <Stack spacing={2} direction="row" width={"200px"} alignItems={'center'} marginRight={"30px"}>
          <Button variant="contained" href="#text-buttons">Login</Button>
          <Button variant="contained" href="#text-buttons">Register</Button>
          </Stack>
        </Stack>
    )
}
export default Navbar