import styled from 'styled-components';
interface MenuProps {
  isActive: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
`;

export const Toogle = styled.div<MenuProps>`
  background-color: ${(props) => props.theme.colors.gray600};
  border-radius: ${(props) => props.theme.borderRadius.roundedFull};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 60px;
  width: 60px;

  span,
  span::before,
  span::after {
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};
    transition: ${(props) => props.theme.transitions.all};
  }
  span:before {
    content: '';
    transform: ${(props) =>
      props.isActive ? 'rotate(45deg)' : 'translateY(6px)'};
  }
  span:after {
    content: '';
    transform: ${(props) =>
      props.isActive ? 'rotate(-45deg)' : 'translateY(-6px)'};
  }
  span {
    background-color: ${(props) =>
      props.isActive ? 'transparent' : props.theme.colors.white};
  }
`;

export const Menu = styled.ul<MenuProps>`
  position: relative;
  z-index: 2;
  padding: 53px 0 22px;
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  transition: ${(props) => props.theme.transitions.all};
  text-align: left;

  a {
    position: relative;
    display: block;
    height: 50px;
    line-height: 50px;
    padding: 0 1em 0 calc(1em + 60px);
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    transition: ${(props) => props.theme.transitions.all};

    &:before {
      content: '';
      position: absolute;
      width: 3px;
      height: 16px;
      top: 50%;
      left: 60px;
      background-color: ${(props) => props.theme.colors.green300};
      transform: translateX(3px) translateY(-50%) scaleY(0);
      /* transition: transform 0.15s 0.3s; */
    }

    svg {
      position: absolute;
      left: 19px;
      top: 11px;
      text-align: center;
      transform: ${(props) =>
        props.isActive
          ? 'transform: translateY(-50%) scale(1);'
          : 'translateY(-50%) scale(0)'};
      opacity: ${(props) => (props.isActive ? '1' : '0.6')};
      transition: ${(props) => props.theme.transitions.all};
    }
    span {
      display: block;

      transition: transform 0.2s;
      opacity: ${(props) => (props.isActive ? 1 : 0)};
      transform: ${(props) =>
        props.isActive ? 'translateX(0)' : 'translateX(-25px)'};
      ${(props) => (props.isActive ? 'animation: slideIn 0.15s backwards' : '')}
    }
  }

  a.active {
    color: ${(props) => props.theme.colors.green300};
    &:before {
      transform: ${(props) =>
        props.isActive ? 'translateX(-3px) translateY(-50%) scaleY(1)' : ''};
      transition: ${(props) => (props.isActive ? 'transform 0.15s 0.3s' : '')};
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-25px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const MenuBackground = styled.span<MenuProps>`
  background-color: ${(props) => props.theme.colors.gray600};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 60px;
  height: ${(props) => (props.isActive ? '100%' : '60px')};
  border-radius: 30px;
  background: #333;
  box-shadow: ${(props) =>
    props.isActive
      ? '0 6px 30px rgb(0 0 0 / 20%)'
      : '0 1px 4px rgb(0 0 0 / 20%)'};
  transition: ${(props) => props.theme.transitions.all};
  pointer-events: none;
`;
