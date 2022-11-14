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

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },

  {
    title: "Roster",
    icon: <TableRowsIcon />,
    link: "/roster",
  },

  {
    title: "Unavailability",
    icon: <EventBusyIcon />,
    link: "/unavailability",
  },

  {
    title: "Upcoming Events",
    icon: <EventIcon />,
    link: "/upcoming_events",
  },

  {
    title: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },

  {
    title: "Inbox",
    icon: <InboxIcon />,
    link: "/inbox",
  },

  {
    title: "Profile",
    icon: <PersonIcon />,
    link: "/profile",
  },

  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },

  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];

export const DropdownData = [
  {
    title: "Other Volunteers",
    link: "/other_volunteers",
  },

  {
    title: "Cancel Roster",
    link: "/cancel_roster",
  },
];
