import React from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaHome,
  FaIdCard,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaUserAlt,
  FaBars,
} from "react-icons/fa";

const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <div>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <ProSidebar
        className="sidebar"
        collapsed={collapsed}
        breakPoint="xl"
        toggled={toggled}
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Meu curriculo
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaHome />}>
              {" "}
              <a href="#home"> Inicio</a>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <MenuItem icon={<FaUserGraduate />}>
              {" "}
              <a href="#education"> Educação</a>
            </MenuItem>
            <MenuItem icon={<FaCode />}>
              {" "}
              <a href="#skills"> Habilidades</a>
            </MenuItem>
            <MenuItem icon={<FaBriefcase />}>
              {" "}
              <a href="#experience"> Experiência</a>
            </MenuItem>
            <MenuItem icon={<FaUserAlt />}>
              {" "}
              <a href="#hobbies"> Sobre mim</a>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a href="#contacts" className="sidebar-btn">
              <FaIdCard />
              <i>Contatos</i>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Aside;
