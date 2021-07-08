import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const Card = styled.div`
  padding: 2rem 2rem;
  background: #fff;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    margin: 30px 0;
    color: #333;
  }

  p {
    background: #d8e0e4;
    padding: 26px;
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: uppercase;
  }

  img {
    height: 18rem;
    width: 18rem;
  }

  @media (max-width: 900px) {
    margin-top: 4rem;
  }
`;

export const InformationsHomePage = styled.div`
  margin: 50px 0 50px 20px;

  h2 {
    background: #333;
    width: 8rem;
    max-width: 8rem;
    color: #fff;
    text-align: center;
    padding: 25px 0;
  }

  div {
    margin-top: 3rem;
    font-size: 18px;
    width: 20rem;
    height: 1rem;
  }
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;
