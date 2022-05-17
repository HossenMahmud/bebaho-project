import { Box } from "@mui/system";
import LoginLayout from "../components/Login/LoginLoyout";
import styles from '../styles/Login.module.css'
const Login = () => {
    return (
        <Box className={styles.loginContainer}>
            <LoginLayout></LoginLayout>
        </Box>
    );
}

export default Login;