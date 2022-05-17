import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
    AppBar,
    Box,
    Button,
    Card,
    Grid,
    MenuItem,
    TextField,
} from "@mui/material";

export const TextFieldMake = styled(TextField)(({ theme }) => ({
    "& label": {
        color: "#3AA76D",
        fontSize: '14px',
    },
    "& label.Mui-focused": {
        color: "#ffffff",
        backgroundColor: "#3AA76D",
        padding: "0px 15px",
        borderRadius: "5px  0 5px 0",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "1px solid #3AA76D",
        },

        "&:hover fieldset": {
            border: "2px solid gray",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#3AA76D",
        },
    },

    "& .MuiOutlinedInput-input": {
        color: "#3AA76D",
    },
    marginTop: "10px",
}));