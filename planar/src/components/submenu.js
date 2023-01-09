import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #4f4f4f;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    background-color: #d9d9d9;
  }

  &:nth-last-child(2) {
    position: sticky;
    margin-top: 600px;
  }
`;

const Sidebars = styled.div`
  &#active {
    background-color: pink;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4f4f4f;
  font-size: 15px;

  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }

  //   &#use {
  //     background-color: #d9d9d9;
  //   }
`;

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <Sidebars
      id={window.location.pathname === item.path ? "active" : ""}
      // onclick={(window.location.pathname = item.path)}
    >
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div id="itemlist">
          <div id="icon">{item.icon}</div>
          <SidebarLabel className="titles">{item.title}</SidebarLabel>
        </div>
        <div id="arrow">
          {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </Sidebars>
  );
};

export default Submenu;

// function back { (
//   () => {window.location.pathname = item.path})
// }

// function Sidebar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="Sidebar">
//       <ul className={open ? "SidebarList open" : "SidebarList"}>
//         {SidebarData.map((val, key) => {
//           return (
//             <li
//               key={key}
//               className="row"
//               id={window.location.pathname === val.link ? "active" : ""}
//               onClick={() => {
//                 window.location.pathname = val.link;
//               }}
//             >
//               {" "}
//               <div className="sidebar-content">hello</div>{" "}
//               <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>{" "}
//               <div>
//                 <i className="dropdown" onClick={() => setOpen(!open)}>
//                   <ArrowForwardIosIcon />
//                 </i>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
