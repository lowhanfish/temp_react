import { Outlet } from "react-router-dom";
import { Toolbar, Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";

const drawerWidth = 240;

export default function MainLayout() {
    return (
        <Box sx={{ display: "flex" }}>
            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} />

            {/* Konten */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {/* Tempat render halaman */}
                <Outlet />
            </Box>
        </Box>
    );
}
