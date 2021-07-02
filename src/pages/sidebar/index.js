import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Divide as Hamburger } from "hamburger-react";

import { FaGem, FaHeart } from "react-icons/fa";

import { useState } from "react";

import { Container } from "./styles";
import "./custom.scss";

export default function SideBar() {
  const [hamburguer, setHamburger] = useState(false);

  const [isOpen, setOpen] = useState(true);

  return (
    <Container>
      <ProSidebar collapsed={hamburguer}>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        </Menu>
      </ProSidebar>

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
