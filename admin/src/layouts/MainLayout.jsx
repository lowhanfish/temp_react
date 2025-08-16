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
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState, useRef, useEffect } from "react";
import SideBar from "../components/SideBar";

const drawerWidth = 240;

export default function MainLayout() {
    const theme = useTheme();
    const isTabletOrBelow = useMediaQuery("(max-width:1024px)");

    // pisahkan state untuk desktop & mobile
    const [desktopOpen, setDesktopOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleButtonRef = useRef(null);

    // toggle drawer
    const handleDrawerToggle = () => {
        if (isTabletOrBelow) {
            setMobileOpen((prev) => !prev);
        } else {
            setDesktopOpen((prev) => !prev);
        }
    };

    // reset saat pindah mode
    useEffect(() => {
        if (isTabletOrBelow) {
            setMobileOpen(false);     // mobile default: tertutup
        } else {
            setDesktopOpen(true);     // desktop default: terbuka
        }
    }, [isTabletOrBelow]);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    width: isTabletOrBelow
                        ? "100%"
                        : desktopOpen
                            ? `calc(100% - ${drawerWidth}px)`
                            : "100%",
                    ml: isTabletOrBelow ? 0 : desktopOpen ? `${drawerWidth}px` : 0,
                    transition: theme.transitions.create(["margin", "width"], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar>
                    <IconButton
                        ref={toggleButtonRef}
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        {(isTabletOrBelow ? mobileOpen : desktopOpen)
                            ? <MenuOpenIcon />
                            : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            {isTabletOrBelow ? (
                <SideBar
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                />
            ) : (
                <SideBar
                    variant="persistent"
                    open={desktopOpen}
                    onClose={handleDrawerToggle}
                />
            )}

            {/* Konten */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: isTabletOrBelow
                        ? "100%"
                        : desktopOpen
                            ? `calc(100% - ${drawerWidth}px)`
                            : "100%",
                    ml: isTabletOrBelow ? 0 : desktopOpen ? `${drawerWidth}px` : 0,
                    transition: theme.transitions.create(["margin", "width"], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
