import styled from "styled-components";

export const Title = styled.div`
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
  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HobbiesContainer = styled.div`
  display: flex;
  height: 38rem;
  margin-bottom: 2rem;
`;

export const CardCarousel = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 22rem;
  height: 100%;

  @media (max-width: 900px) {
    width: 22rem;
  }
`;

export const CardDescription = styled.div`
  height: 100%;
  width: 22rem;
  padding: 25px 30px;

  background: #333;
  margin-left: 1rem;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    display: flex;
    letter-spacing: 2px;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin-top: 1rem;
    letter-spacing: -1px;
    text-align: justify;
  }
  @media (max-width: 900px) {
    margin-top: 1rem;

    margin-left: 0;
  }
`;
