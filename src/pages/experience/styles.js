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
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExperienceContainer = styled.div`
  display: flex;
`;

export const CardWorkOne = styled.div`
  width: 28.5rem;
  height: 31rem;
  padding: 25px 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 2px;
  }
  div {
    margin-top: 1rem;
  }

  .occupation i {
    font-size: 14px;
  }

  .description p {
    margin-top: 1rem;
    letter-spacing: -1px;
    text-align: justify;
  }
`;

export const CardWorkTwo = styled.div`
  width: 28.5rem;
  margin-left: 1rem;
  height: 31rem;
  padding: 25px 30px;
  color: #fff;
  background: #333;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 2px;
  }
  div {
    margin-top: 1rem;
  }

  .occupation i {
    font-size: 14px;
  }

  .description p {
    margin-top: 1rem;
    letter-spacing: -1px;
    text-align: justify;
  }
`;
