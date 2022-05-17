import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MakeButton } from "../../styles/AllStyledComponents";

const LoginNav = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8} sx={{ mx: 'auto' }}>
                <Box sx={{ backgroundColor: "#fff", px: 2, py: 3, display: 'flex', justifyContent: 'space-between' }}>
                    <MakeButton width="80px" height="30px" radius="5px" bg="#F0F0F0" color="#000">
                        Bebaho
                    </MakeButton>
                    <MakeButton width="80px" height="30px" radius="5px" bg="#F0F0F0" color="#000">
                        Login
                    </MakeButton>
                </Box>
            </Grid>
        </Grid >
    );
}

export default LoginNav;