import styled from 'styled-components';

export const MyProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  div:last-of-type {
    /* flex: 1; */
  }
`;
export const AboutMe = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;

  gap: 2.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    span,
    a {
      color: ${(props) => props.theme.colors.white};
    }
    a {
      text-decoration: underline;
    }
  }
  li + li {
    padding-top: 1.25rem;
  }
`;
