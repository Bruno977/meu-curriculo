import styled from 'styled-components';

export const GridColumns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    margin: 2.5rem 0;
  }
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
