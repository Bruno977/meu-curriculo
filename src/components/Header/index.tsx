import { Briefcase, House, User } from 'phosphor-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    // window.addEventListener('click', handleClick);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <HeaderContainer className="menu">
      <Toogle
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="menu"
      >
        <span></span>
      </Toogle>
      <Menu isActive={isOpen} className="menu">
        <li>
          <NavLink to="/">
            <span>Inicio</span>
            <House size={24} />
          </NavLink>
        </li>
        <li>
          <Link to="about">
            <span>Sobre</span>
            <User size={24} />
          </Link>
        </li>
        <li>
          <Link to="portfolio">
            <span>Portfólio</span>
            <Briefcase size={24} />
          </Link>
        </li>
      </Menu>
      <MenuBackground isActive={isOpen} className="menu" />
    </HeaderContainer>
  );
}

export default Header;
