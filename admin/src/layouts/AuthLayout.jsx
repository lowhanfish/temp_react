import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthLayout() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flex: 1, marginLeft: -1, marginRight: -1, marginTop: -1 }}>
            <Outlet />
        </Box>
        // <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        //     <Outlet />
        // </Box>
    );
}
