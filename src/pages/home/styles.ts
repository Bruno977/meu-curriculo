import styled from 'styled-components';

export const GridColumns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.5rem;
  min-height: 100vh;

  /* color: ${(props) => props.theme.colors.white}; */
`;

export const AboutMe = styled.div`
  h4 {
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    line-height: ${(props) => props.theme.lineHeights.leadingLoose};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.25rem;
  gap: 1.25rem;
`;
