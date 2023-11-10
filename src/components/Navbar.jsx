import Stack from '@mui/material/Stack';
import Img from "../assets/cristiano.webp"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Nav = useNavigate()
    return (
        <Stack padding={"10px"} bgcolor={"#3390FF"} direction="row" justifyContent={'space-between'} >
          <Stack width={"50px"} >
          <img src={Img} style={{
            borderRadius: "100px"
          }}  ></img>
          </Stack>
          <Stack spacing={2} direction="row" width={"200px"} alignItems={'center'} marginRight={"30px"}>
          <Button variant="contained" onClick={() => Nav("/Login")} >Login</Button>
          <Button variant="contained" onClick={()=> Nav("/Register") }>Register</Button>
          </Stack>
        </Stack>
    )
}
export default Navbar