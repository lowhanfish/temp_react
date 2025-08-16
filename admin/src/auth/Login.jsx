import React from "react";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // nanti bisa ditambah validasi login di sini
        navigate("/"); // arahkan ke Dashboard setelah login
    };



    return (
        <Paper sx={{ p: 4, width: 300 }}>
            <Typography variant="h6" mb={2}>Login</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Email" fullWidth />
                <TextField label="Password" type="password" fullWidth />
                <Button onClick={handleLogin} variant="contained">Login</Button>
            </Box>
        </Paper>
    );
}
