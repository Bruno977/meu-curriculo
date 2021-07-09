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

export const CardContacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardEmail = styled.div`
  width: 28rem;
  height: 29rem;
  padding: 25px 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    display: flex;
    letter-spacing: 2px;
    justify-content: space-between;
    align-items: center;
  }

  form > div {
    margin-top: 1rem;
  }
  .button {
    background: #333;
    color: #fff;
    width: 5rem;
    text-transform: capitalize;
  }
  .button:hover {
    background: #d8e0e4;
    color: #333;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  @media (max-width: 900px) {
    margin-top: 2rem;
    width: 22rem;

    #outlined-basic {
      margin-left: 10px;
    }
  }
`;

export const CardFindMe = styled.div`
  width: 28rem;
  margin-left: 1rem;
  height: 29rem;
  padding: 25px 30px;

  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h2 {
    display: flex;
    letter-spacing: 2px;
    justify-content: space-between;
    align-items: center;
  }

  div > div {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    display: inline-block;
    background: #333;
    color: #fff;
    padding: 15px;
    position: relative;
    margin-left: 1.5rem;
    width: 300px;
    border-radius: 5px;
  }
  strong:before {
    border: 10px solid transparent;
    border-right-color: #333;
    content: "";
    left: -20px;
    position: absolute;
  }

  @media (max-width: 900px) {
    width: 22rem;
    margin-top: 2rem;
    margin-left: 0;

    strong {
      width: 230px;
    }
    div > div {
      flex-direction: row;
    }
    .email {
      letter-spacing: -1px;
      font-size: 13.5px;
    }
  }
`;

export const CardSocialNetwork = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  width: 57rem;
  padding: 13px;
  margin-top: 1rem;
  background-color: #333;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div > div {
    margin-left: 1rem;
    color: #fff;
  }

  @media (max-width: 900px) {
    width: 22rem;
    margin-bottom: 1rem;

    div {
      flex-direction: row !important;
    }
  }
`;
