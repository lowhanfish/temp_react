import * as React from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./components/SideBar";

const drawerWidth = 240;

export default function App() {
  const isTabletOrBelow = useMediaQuery("(max-width: 1024px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: isTabletOrBelow ? "100%" : `calc(100% - ${drawerWidth}px)`,
          ml: isTabletOrBelow ? 0 : `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          {isTabletOrBelow && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar untuk desktop */}
      {!isTabletOrBelow && (
        <SideBar variant="permanent" open={true} onClose={() => { }} />
      )}

      {/* Sidebar untuk tablet & mobile dengan animasi */}
      {isTabletOrBelow && (
        <Slide direction="right" in={mobileOpen} mountOnEnter unmountOnExit>
          <SideBar
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Slide>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: isTabletOrBelow
            ? "100%"
            : `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Ini adalah area konten utama. Sidebar sekarang ada di file terpisah
          `src/components/SideBar.jsx`.
        </Typography>
      </Box>
    </Box>
  );
}
