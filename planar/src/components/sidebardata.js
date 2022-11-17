import React, { Component } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import TableRowsIcon from "@mui/icons-material/TableRows";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EventIcon from "@mui/icons-material/Event";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },

  {
    title: "Roster",
    icon: <TableRowsIcon />,
    path: "/roster",
    iconClosed: <ArrowForwardIosIcon />,
    iconOpen: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: "Other Volunteers",
        path: "/other_volunteers",
      },

      {
        title: "Cancel Roster",
        path: "/cancel_roster",
      },
    ],
  },

  {
    title: "Unavailability",
    icon: <EventBusyIcon />,
    path: "/unavailability",
    iconClosed: <ArrowForwardIosIcon />,
    iconOpen: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: "Single Day",
        path: "/unavailability/single_day",
      },

      {
        title: "Vacations",
        path: "/unavailability/vacations",
      },
    ],
  },

  {
    title: "Upcoming Events",
    icon: <EventIcon />,
    path: "/upcoming_events",
  },

  {
    title: "Calendar",
    icon: <CalendarMonthIcon />,
    path: "/calendar",
  },

  {
    title: "Inbox",
    icon: <InboxIcon />,
    path: "/inbox",
  },

  {
    title: "Profile",
    icon: <PersonIcon />,
    path: "/profile",
  },

  {
    title: "Logout",
    icon: <LogoutIcon />,
    path: "/logout",
  },

  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];
