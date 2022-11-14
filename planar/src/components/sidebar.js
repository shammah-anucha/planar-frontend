import React, { Component } from "react";
import "../App.css";
import { SidebarData } from "./sidebardata";
import { DropdownData } from "./sidebardata";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
              //   btn={
              //     <div>
              //       <buttton class="dropdown-btn">
              //         <i class="fa fa-caret-down"></i>
              //       </buttton>
              //       <div className="dropdown-container">
              //         <ul className="DropdownList">
              //           {DropdownData.map((val, key) => {
              //             return (
              //               <li
              //                 key={key}
              //                 id={
              //                   window.location.pathname == val.link
              //                     ? "active"
              //                     : ""
              //                 }
              //                 className="row2"
              //                 onClick={() => {
              //                   window.location.pathname = val.link;
              //                 }}
              //               >
              //                 {" "}
              //                 <div id="title">{val.title}</div>
              //               </li>
              //             );
              //           })}
              //         </ul>
              //       </div>
              //     </div>
              //   }
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
