import styled from "styled-components";

export const Title = styled.div`
  h2 {
    letter-spacing: 2px;
    text-align: center;
    font-size: 30px;
  }
  span {
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

export const CardSkills = styled.div`
  width: 58rem;
  height: 32rem;
  background: #fff;
  padding: 25px 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    font-size: 15px;
    margin-top: 1rem;
  }

  strong {
    display: flex;
    align-items: center;
  }

  .progressbar {
    width: 90%;
    background-color: #d8e0e4;
    padding: 2px;
    border-radius: 8px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    text-align: right;
  }

  .progressbar > div {
    display: block;
    height: 10px;
    background-color: #333;
    border-radius: 10px;

    transition: width 500ms ease-in-out;
  }
  .cointainer-progressbar {
    margin-top: 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    height: 32rem;
  }
  @media (max-width: 900px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 22rem;

    h2 {
      justify-content: center;
    }
    .cointainer-progressbar {
      flex-direction: row;
    }
  }
`;
