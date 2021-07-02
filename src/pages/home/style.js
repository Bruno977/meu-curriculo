import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const Card = styled.div`
  padding: 25px 30px;
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
`;

export const InformationsHomePage = styled.div`
  margin: 50px 0 50px 20px;

  h2 {
    background: #333;
    width: 134px;
    color: #fff;
    text-align: center;
    padding: 25px 0;
  }

  div {
    margin-top: 3rem;
    font-size: 18px;
    width: 20rem;
  }
`;
