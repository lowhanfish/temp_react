import * as React from "react";
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { ListItemSatu, stylex } from "../assets/styling/style.js";

const drawerWidth = 240;

export default function SideBar({ variant, open, onClose }) {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openSubMenu, setOpenSubMenu] = React.useState(false);

    const handleMenuClick = () => setOpenMenu(!openMenu);
    const handleSubMenuClick = () => setOpenSubMenu(!openSubMenu);

    const drawerContent = (
        <Box sx={{ overflow: "auto" }}>
            <Toolbar />
            <List>
                {/* Dashboard */}
                <ListItemSatu disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={stylex.sideBarText1} primary="Dashboard" />
                    </ListItemButton>
                </ListItemSatu>

                {/* Profile */}
                <ListItemSatu disablePadding>
                    <ListItemButton component={Link} to="/profile">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={stylex.sideBarText1} primary="Profile" />
                    </ListItemButton>
                </ListItemSatu>

                {/* Menu dengan sub-menu */}
                <ListItemSatu>
                    <ListItemButton onClick={handleMenuClick}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={stylex.sideBarText1} primary="Master Data" />
                        {openMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItemSatu>

                {/* Sub-menu */}
                <Collapse in={openMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleSubMenuClick}>
                            {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                            <ListItemText primaryTypographyProps={stylex.sideBarText2} primary="User Management" />
                            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {/* Sub-sub menu */}
                        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={stylex.sideBarText3} primary="Add User" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={stylex.sideBarText3} primary="User List" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>

                {/* Logout */}
                <ListItemSatu disablePadding>
                    <ListItemButton component={Link} to="/login">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={stylex.sideBarText1}
                            primary="Logout"
                        />
                    </ListItemButton>
                </ListItemSatu>
            </List>
        </Box>
    );

    return (
        <Drawer
            variant={variant}
            open={open}
            onClose={onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    transition: "transform 0.3s ease-in-out", // animasi smooth
                },
            }}
        >
            {drawerContent}
        </Drawer>
    );
}
