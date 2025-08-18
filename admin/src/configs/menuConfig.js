// src/config/menuConfig.js
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';

const menuConfig = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/",
  },
  {
    title: "Profile",
    icon: PeopleAltIcon,
    path: "/profile",
  },
  {
    title: "Menu-SubMenu",
    icon: InboxIcon,
    children: [
          {
            title: "Add User",
            path: "/Registration",
            icon: FiberManualRecordIcon,
          },
          {
            title: "User List",
            path: "/",
            icon: FiberManualRecordIcon,
          },
        ],
  },
  {
    title: "Master Data",
    icon: SettingsIcon,
    children: [
      {
        title: "User Management",
        children: [
          {
            title: "Add User",
            path: "/Registration",
            icon: FiberManualRecordIcon,
          },
          {
            title: "User List",
            path: "/",
            icon: FiberManualRecordIcon,
          },
        ],
      },
      {
        title: "Template",
        children: [
          {
            title: "Template 1",
            path: "/Template1",
            icon: FiberManualRecordIcon,
          },
          {
            title: "Template 2",
            path: "/Template2",
            icon: FiberManualRecordIcon,
          },
          {
            title: "Documentation",
            path: "/Documentation",
            icon: FiberManualRecordIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Logout",
    icon: LogoutIcon,
    path: "/login",
  },
];

export default menuConfig;
