import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonDefaultProps {
  variant?: 'outline' | 'solid';
}

const Button = css<ButtonDefaultProps>`
  vertical-align: middle;
  background-color: ${(props) =>
    props.variant === 'solid' ? props.theme.colors.green500 : 'transparent'};
  color: ${(props) =>
    props.variant === 'solid'
      ? props.theme.colors.white
      : props.theme.colors.green500};
  padding: 0.675rem 1.25rem;
  border: 2px solid ${(props) => props.theme.colors.green500};
  border-radius: ${(props) => props.theme.borderRadius.roundedFull};

  cursor: pointer;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.textSm};
  letter-spacing: 1px;
  font-weight: 600;
  transition: ${(props) => props.theme.transitions.all};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'solid' ? 'transparent' : props.theme.colors.green500};
    color: ${(props) =>
      props.variant === 'solid'
        ? props.theme.colors.green500
        : props.theme.colors.white};
  }
  svg,
  span {
    vertical-align: middle;
  }
  span {
    padding-left: 0.3rem;
  }
`;

export const ButtonDefault = styled.button<ButtonDefaultProps>`
  ${Button}
`;
export const Router = styled(Link)<ButtonDefaultProps>`
  ${Button}
`;
