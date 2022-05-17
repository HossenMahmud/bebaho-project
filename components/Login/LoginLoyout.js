import { Box } from "@mui/system";
import loginImg from '../../public/images/login2.png'
import Image from 'next/image'
import LoginNav from "./LoginNav";
import LoginBody from "./LoginBody";
const LoginLayout = () => {
    return (
        <Box>
            <LoginNav></LoginNav>
            <Image src={loginImg} alt="" />
            <LoginBody></LoginBody>
        </Box>
    );
}

export default LoginLayout;