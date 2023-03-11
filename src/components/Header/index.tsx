import { Briefcase, Chats, House, User } from 'phosphor-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Menu, Toogle, MenuBackground } from './styles';

import { useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  let location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const { target } = e;
      if (target instanceof HTMLElement) {
        if (!target.classList.contains('menu')) {
          setIsOpen(false);
        }
      }
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <HeaderContainer isActive={isOpen} className="menu">
      <Toogle
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="menu"
      >
        <span></span>
      </Toogle>
      <Menu isActive={isOpen} className="menu">
        <li>
          <NavLink to="/meu-curriculo">
            <span>Inicio</span>
            <House size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="about">
            <span>Sobre</span>
            <User size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="portfolio">
            <span>Portfólio</span>
            <Briefcase size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="contact">
            <span>Contato</span>
            <Chats size={24} />
          </NavLink>
        </li>
      </Menu>
      <MenuBackground isActive={isOpen} className="menu" />
    </HeaderContainer>
  );
}

export default Header;
