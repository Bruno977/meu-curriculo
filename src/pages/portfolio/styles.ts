import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.25rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 2.5rem;
  }
`;
