import styled from 'styled-components';

export const DefaultTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.text4xl};
  font-weight: 900;

  margin: 2.5rem 0;
  span {
    color: ${(props) => props.theme.colors.green300};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.textSm};
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray300};
    letter-spacing: 1px;
    margin-top: 1.25rem;
  }
  p:before,
  p:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 2px;
    background: ${(props) => props.theme.colors.green300};
  }
  p:before {
    margin-right: 1.25rem;
  }
  p:after {
    margin-left: 1.25rem;
  }
  @media screen and (max-width: 768px) {
    p:before,
    p:after {
      display: none;
    }
    margin-top: 6rem;
  }
`;
