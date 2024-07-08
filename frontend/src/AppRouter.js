import React from 'react';
import {Box, Typography} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import {Login} from "@mui/icons-material";
import SignUp from "./SignuUp";

function Copyright() {
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright @ "}
            fsoftwareegineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={<App />} />
                    <Route path="login" exact component={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
};

export default AppRouter;