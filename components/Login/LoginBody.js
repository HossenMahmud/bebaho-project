import { Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { IconContainer, HorizontalFlex, MakeButton, LinkTag, BoxContainer } from "../../styles/AllStyledComponents";
import { TextFieldMake } from "../../styles/MetarialStyle";

const LoginBody = () => {

    const gender = [
        {
            value: "Male",
            label: "Male",
        },
        {
            value: "Female",
            label: "Female",
        },
    ];
    const religion = [
        {
            value: "Muslim",
            label: "Muslim",
        },
        {
            value: "Hindu",
            label: "Hindu",
        },
    ];
    return (
        <Box>
            <Grid container >
                <Grid item xs={12} sm={8} sx={{ mx: 'auto', mt: -1 }}>
                    <Box sx={{ backgroundColor: "#fff" }}>
                        <BoxContainer>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} md={3}>
                                    <TextFieldMake
                                        fullWidth
                                        size="small"
                                        variant="filled"
                                        name="gender"
                                        label="Gender"
                                        required
                                        select
                                        SelectProps={{ native: true }}>

                                        {gender.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextFieldMake>
                                </Grid>
                                <Grid item xs={12} sm={4} md={3}>
                                    <TextFieldMake
                                        fullWidth
                                        size="small"
                                        variant="filled"
                                        name="religion"
                                        label="Religion"
                                        required
                                        select
                                        SelectProps={{ native: true }}>

                                        {religion.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextFieldMake>
                                </Grid>
                                <Grid item xs={12} sm={4} md={3}>
                                    <TextFieldMake
                                        fullWidth
                                        type="date"
                                        focused
                                        size="small"
                                        variant="filled"
                                        name="date"
                                        label="Date"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3}>
                                    <TextFieldMake
                                        fullWidth
                                        type="number"
                                        size="small"
                                        variant="filled"
                                        name="number"
                                        label="Mobile Number"
                                    />
                                </Grid>
                            </Grid>
                        </BoxContainer>

                        <Box sx={{ px: 2, py: 3 }}>
                            <Grid container sx={{ mb: 3 }}>
                                <Grid item xs={12} sm={4} sx={{ mx: 'auto' }}>
                                    <LinkTag href="#" style={{ display: 'block', color: "#C4C4C4", fontSize: '12px' }} >
                                        Already Registered?
                                    </LinkTag>
                                    <MakeButton style={{ margin: "10px 0px" }} width="280px" height="40px" bg="#C4C4C4" color="#231F20" radius="5px" >Login</MakeButton>
                                    <Stack
                                        sx={{ mb: 3 }}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        width={280}
                                    >
                                        <LinkTag href="#" style={{ color: "#C4C4C4", fontSize: '12px' }}>
                                            Forget Password?
                                        </LinkTag>
                                        <LinkTag href="#" style={{ color: "#C4C4C4", fontSize: '12px' }} >
                                            Help Message
                                        </LinkTag>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Stack
                                sx={{ mb: 3 }}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <HorizontalFlex>
                                    <IconContainer> <VerifiedUserIcon sx={{ color: "#fff", fontSize: "24px" }} /></IconContainer>
                                    <Typography variant="body" sx={{ ml: 1, color: '#231F20', fontSize: '14px' }}>Verified Profile</Typography>
                                </HorizontalFlex>
                                <HorizontalFlex>
                                    <IconContainer> <ThumbUpIcon sx={{ color: "#fff", fontSize: "24px" }} /></IconContainer>
                                    <Typography variant="body" sx={{ ml: 1, color: '#231F20', fontSize: '14px' }}>Guaranteed Discuss</Typography>
                                </HorizontalFlex>
                                <HorizontalFlex>
                                    <IconContainer> <PrivacyTipIcon sx={{ color: "#fff", fontSize: "24px" }} /></IconContainer>
                                    <Typography variant="body" sx={{ ml: 1, color: '#231F20', fontSize: '14px' }}>Privacy Maintain</Typography>
                                </HorizontalFlex>
                            </Stack>

                            <MakeButton width="100%" height="50px" bg="#3AA76D" radius="5px"></MakeButton>

                            {/* Footer Navbar */}
                            <Stack
                                sx={{ mt: 3 }}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <LinkTag href="#" >
                                    About Us
                                </LinkTag>
                                <LinkTag href="#">
                                    Be Safe Online
                                </LinkTag>
                                <LinkTag href="#">
                                    Round Policy
                                </LinkTag>
                                <LinkTag href="#">
                                    Privacy
                                </LinkTag>
                                <LinkTag href="#">
                                    Terms of Use
                                </LinkTag>
                                <LinkTag href="#">
                                    Contact Us
                                </LinkTag>
                            </Stack>
                        </Box>
                    </Box>
                </Grid >
            </Grid >
        </Box >
    );
}

export default LoginBody;