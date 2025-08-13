import * as React from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Collapse,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
                    transition: "all 0.3s ease",
                },
            }}
        >
            {drawerContent}
        </Drawer>
    );
}
