import styled from 'styled-components';

export const Project = styled.li`
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.roundedMd};
  background: ${(props) => props.theme.colors.gray800};
  transition: ${(props) => props.theme.transitions.all};

  a {
    justify-self: center;
    width: 100%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    scale: 0.9;
    transition: ${(props) => props.theme.transitions.all};

    position: relative;
  }
  p {
    transition: ${(props) => props.theme.transitions.all};
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    text-align: center;
  }
  svg {
    position: absolute;
    bottom: 0;
    font-size: 0;
    transition: ${(props) => props.theme.transitions.all};
  }
  &:hover a {
    scale: 1.1;
  }
  &:hover svg {
    font-size: 32px;
    bottom: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    a {
      height: 150px;
    }
  }
`;
