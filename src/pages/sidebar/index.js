import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import { Divide as Hamburger } from "hamburger-react";

import {
  FaHome,
  FaIdCard,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaFish,
} from "react-icons/fa";

import { useState } from "react";

import { Container } from "./styles";
import "./custom.scss";

export default function SideBar() {
  const [hamburguer, setHamburger] = useState(false);

  const [isOpen, setOpen] = useState(true);

  function clickNavBar(e) {
    return e.target.offsetTop - 5;
  }

  return (
    <Container>
      <nav>
        <ProSidebar collapsed={hamburguer}>
          <Menu iconShape="square">
            <MenuItem icon={<FaHome />}>
              <a href="#home"> Inicio</a>
            </MenuItem>
            <MenuItem icon={<FaUserGraduate />} onClick={clickNavBar}>
              <a href="#education"> Educação</a>
            </MenuItem>
            <MenuItem icon={<FaCode />}>
              <a href="#skills"> Habilidades</a>
            </MenuItem>
            <MenuItem icon={<FaBriefcase />}>
              <a href="#experience"> Experiência</a>
            </MenuItem>
            <MenuItem icon={<FaFish />}>
              <a href="#hobbies"> Hobbies</a>
            </MenuItem>
          </Menu>

          <SidebarFooter>
            {
              <Menu>
                <MenuItem icon={<FaIdCard />}>
                  <a href="#education"> Contatos</a>
                </MenuItem>
              </Menu>
            }
          </SidebarFooter>
        </ProSidebar>
      </nav>

      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={(toggled) => {
          if (toggled) {
            setHamburger(false);
          } else {
            setHamburger(true);
          }
        }}
      />
    </Container>
  );
}
