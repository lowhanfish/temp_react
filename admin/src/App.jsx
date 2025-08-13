import * as React from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  useMediaQuery,
  Collapse,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const drawerWidth = 240;

export default function App() {
  const isTabletOrBelow = useMediaQuery("(max-width: 1024px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleSubMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const drawerContent = (
    <Box sx={{ overflow: "auto" }}>
      <Toolbar />
      <List>
        {/* Menu Biasa */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>

        {/* Menu dengan sub-menu */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleMenuClick}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Master Data" />
            {openMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        {/* Sub-menu */}
        <Collapse in={openMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={handleSubMenuClick}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="User Management" />
              {openSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Sub-sub menu */}
            <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="Add User" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText primary="User List" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </Box>
  );

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
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              transition: "all 0.3s ease",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Sidebar untuk tablet & mobile dengan animasi */}
      {isTabletOrBelow && (
        <Slide direction="right" in={mobileOpen} mountOnEnter unmountOnExit>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                transition: "all 0.3s ease",
              },
            }}
          >
            {drawerContent}
          </Drawer>
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
          Sidebar sekarang sudah ada animasi buka/tutup, plus menu dengan
          sub-menu dan sub-sub menu.
        </Typography>
      </Box>
    </Box>
  );
}
