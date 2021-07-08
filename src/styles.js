import styled from "styled-components";
export const Container = styled.div`
  display: flex;
`;
export const AlignCenter = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 270px;

  div {
    @media (max-width: 900px) {
      flex-direction: column;
      height: auto;
    }
  }
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;
