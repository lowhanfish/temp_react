// src/config/menuConfig.js
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const menuConfig = [
  {
    title: "Dashboard",
    icon: InboxIcon,
    path: "/",
  },
  {
    title: "Profile",
    icon: InboxIcon,
    path: "/profile",
  },
  {
    title: "Master Data",
    icon: MailIcon,
    children: [
      {
        title: "User Management",
        children: [
          {
            title: "Add User",
            path: "/users/add",
            icon: FiberManualRecordIcon,
          },
          {
            title: "User List",
            path: "/users/list",
            icon: FiberManualRecordIcon,
          },
        ],
      },
      {
        title: "Template",
        children: [
          {
            title: "Template 1",
            path: "/template1",
            icon: FiberManualRecordIcon,
          },
          {
            title: "Template 2",
            path: "/template/2",
            icon: FiberManualRecordIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Logout",
    icon: InboxIcon,
    path: "/login",
  },
];

export default menuConfig;
