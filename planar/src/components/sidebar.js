import "../App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { SidebarData } from "./sidebardata";
import Submenu from "./submenu";
import { IconContext } from "react-icons";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fafafa;
`;

const Nav = styled.div`
  background: #74c0bc;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  color: grey;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  height: 100vh;
  width: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#36736F" }}> */}
      <Body>
        <Nav>
          <NavIcon to="#">
            <DensityMediumIcon onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <CloseIcon onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Body>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;

// import React, { Component } from "react";
// import "../App.css";
// import { SidebarData } from "./sidebardata";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useState } from "react";

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
