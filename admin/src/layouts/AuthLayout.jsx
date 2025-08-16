import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthLayout() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Outlet />
        </Box>
    );
}
