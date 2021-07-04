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

export const HobbiesContainer = styled.div`
  display: flex;
`;

export const CardCarousel = styled.div``;

export const CardDescription = styled.div`
  background: #333;
  height: 34rem;
  width: 22rem;
  margin-left: 1rem;

  color: #fff;
`;
