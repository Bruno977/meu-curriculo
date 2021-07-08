import styled from "styled-components";

export const Tittle = styled.div`
  h2 {
    text-align: center;
    letter-spacing: 2px;
    font-size: 30px;
  }
  h2 > span {
    height: 10px;
    border-left: 8px solid #333;
    margin-right: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const EducationContainer = styled.div`
  display: flex;

  /* @media (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  } */
  div {
    @media (max-width: 900px) {
      margin-top: 1rem;
    }
  }
`;

export const CardCourses = styled.div`
  height: 31rem;
  width: 18rem;
  padding: 25px 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
  }
  li > div {
    font-size: 14px;
    margin-top: 5px;
  }

  li {
    margin-top: 1rem;
  }
  li > strong {
    letter-spacing: -1px;
  }

  @media (max-width: 1200px) {
    height: 32rem;
  }
  @media (max-width: 900px) {
    width: 22rem;
  }
`;

export const CardCollege = styled.div`
  height: 31rem;
  width: 18rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 25px 30px;
  background: #333;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  h2 {
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
  }
  li > div {
    font-size: 14px;
    margin-top: 5px;
  }
  li {
    margin-top: 1rem;
    text-align: justify;
  }
  li > strong {
    letter-spacing: -1px;
  }
  @media (max-width: 1200px) {
    height: 32rem;
  }
  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
    width: 22rem;
  }
`;

export const CardLanguage = styled.div`
  height: 31rem;
  width: 18rem;
  padding: 25px 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
  }

  li > div {
    font-size: 14px;
    margin-top: 5px;
  }
  li {
    margin-top: 1rem;
    text-align: justify;
  }
  li > strong {
    letter-spacing: -1px;
  }
  @media (max-width: 1200px) {
    height: 32rem;
  }
  @media (max-width: 900px) {
    margin-bottom: 1rem;
    width: 22rem;
  }
`;
