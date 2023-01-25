import { House, User } from 'phosphor-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderContainer, Menu, Toogle, MenuBackground } from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Toogle isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </Toogle>
      <Menu isActive={isOpen}>
        <li>
          <NavLink to="/">
            <span>Inicio</span>
            <House size={24} />
          </NavLink>
        </li>
        <li>
          <Link to="about-me">
            <span>Sobre</span>
            <User size={24} />
          </Link>
        </li>
      </Menu>
      <MenuBackground isActive={isOpen} />
    </HeaderContainer>
  );
}

export default Header;
