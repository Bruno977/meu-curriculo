import styled from 'styled-components';

export const MyProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  margin-bottom: 4.5rem;
  > div:last-of-type {
    flex: 1;
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
  .button-container {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    gap: 1.25rem;
    li {
      flex-direction: column;
      gap: 0.625rem;
      align-items: flex-start;
    }
    li + li {
      padding-top: 1.25rem;
    }
    .button-container {
      margin-top: 1.25rem;
    }
  }
`;

export const Divisor = styled.span`
  border-top: 1px solid ${(props) => props.theme.colors.gray800};
  display: block;
  margin-top: 2.5rem;
`;

export const ContainerExperienceEducation = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.25rem;

  > div {
    flex: 0 0 calc(50% - 1.25rem);
  }

  @media screen and (max-width: 768px) {
    > div {
      flex: 1;
    }
  }
`;

export const GridProgress = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.25rem 2.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
