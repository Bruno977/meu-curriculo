import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 2.5rem;
  margin-left: 7px;

  &::before {
    content: '';
    display: block;
    background-color: ${(props) => props.theme.colors.green700};
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin-right: 1.25rem;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    width: 12px;
    height: 12px;
    border-radius: ${(props) => props.theme.borderRadius.roundedFull};
    background-color: ${(props) => props.theme.colors.gray900};
    border: 2px solid ${(props) => props.theme.colors.green700};
  }
`;

export const Card = styled.div`
  margin-left: 1.25rem;
  small {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  h4 {
    color: ${(props) => props.theme.colors.white};
    padding: 0.625rem 0;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    span {
      font-weight: bold;
    }
  }
`;
