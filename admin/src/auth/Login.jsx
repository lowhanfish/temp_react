import { Button, TextField, Box, Typography, Paper } from "@mui/material";

export default function Login() {
    return (
        <Paper sx={{ p: 4, width: 300 }}>
            <Typography variant="h6" mb={2}>Login</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Email" fullWidth />
                <TextField label="Password" type="password" fullWidth />
                <Button variant="contained">Login</Button>
            </Box>
        </Paper>
    );
}
