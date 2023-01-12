import styled from 'styled-components';

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  margin: 2.5rem 0;
  font-size: ${(props) => props.theme.fontSizes.textXl};
`;
