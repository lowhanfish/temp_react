import { Outlet } from "react-router-dom";
import {
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideBar from "../components/SideBar";

const drawerWidth = 240;

export default function MainLayout() {
    const theme = useTheme();
    const isTabletOrBelow = useMediaQuery("(max-width:1024px)");
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    width: isTabletOrBelow ? "100%" : `calc(100% - ${drawerWidth}px)`,
                    ml: isTabletOrBelow ? 0 : `${drawerWidth}px`,
                }}
            >
                <Toolbar>
                    {isTabletOrBelow && (
                        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            {!isTabletOrBelow && (
                <SideBar variant="permanent" open={true} onClose={() => { }} />
            )}
            {isTabletOrBelow && (
                <SideBar variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} />
            )}

            {/* Konten */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: isTabletOrBelow ? "100%" : `calc(100% - ${drawerWidth}px)`,
                    ml: isTabletOrBelow ? 0 : `${drawerWidth}px`,
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
