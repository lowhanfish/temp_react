import * as React from "react";
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { ListItemSatu, stylex } from "../assets/styling/style.js";

const drawerWidth = 240;

export default function SideBar({ variant, open, onClose }) {
    // state fleksibel, key = nama menu/submenu
    const [openMenus, setOpenMenus] = React.useState({});

    // toggle menu/submenu berdasarkan key
    const handleMenuClick = (menuKey) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuKey]: !prev[menuKey],
        }));
    };

    const drawerContent = (
        <Box sx={{ overflow: "auto" }}>
            {/* Logo */}
            <Box sx={{ width: "100%" }}>
                <img
                    src="https://img.freepik.com/premium-vector/white-elegant-blue-background_662550-436.jpg"
                    alt="Logo"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </Box>

            <List>
                {/* Dashboard */}
                <ListItemSatu disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={stylex.sideBarText1}
                            primary="Dashboard"
                        />
                    </ListItemButton>
                </ListItemSatu>

                {/* Profile */}
                <ListItemSatu disablePadding>
                    <ListItemButton component={Link} to="/profile">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={stylex.sideBarText1}
                            primary="Profile"
                        />
                    </ListItemButton>
                </ListItemSatu>

                {/* Master Data */}
                <ListItemSatu>
                    <ListItemButton onClick={() => handleMenuClick("masterData")}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={stylex.sideBarText1}
                            primary="Master Data"
                        />
                        {openMenus["masterData"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItemSatu>

                {/* Sub-menu: User Management */}
                <Collapse in={openMenus["masterData"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => handleMenuClick("userManagement")}
                        >
                            <ListItemText
                                primaryTypographyProps={stylex.sideBarText2}
                                primary="User Management"
                            />
                            {openMenus["userManagement"] ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>

                        {/* Sub-sub menu */}
                        <Collapse in={openMenus["userManagement"]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={stylex.sideBarText3}
                                        primary="Add User"
                                    />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={stylex.sideBarText3}
                                        primary="User List"
                                    />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        {/* Sub-menu: Template */}
                        <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => handleMenuClick("template")}
                        >
                            <ListItemText
                                primaryTypographyProps={stylex.sideBarText2}
                                primary="Template"
                            />
                            {openMenus["template"] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openMenus["template"]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ pl: 8 }}
                                    component={Link}
                                    to="/template1"
                                >
                                    <ListItemIcon>
                                        <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={stylex.sideBarText3}
                                        primary="Template 1"
                                    />
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
                    transition: "transform 0.3s ease-in-out",
                },
            }}
        >
            {drawerContent}
        </Drawer>
    );
}
