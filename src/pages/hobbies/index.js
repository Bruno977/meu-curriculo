import React from "react";

import { Container, HobbiesContainer, Title } from "./styles";

export default function Hobbies() {
  return (
    <>
      <br id="hobbies" />
      <Title>
        <h2>
          <span></span> Hobbies
        </h2>
      </Title>
      <Container>
        <HobbiesContainer></HobbiesContainer>
      </Container>
    </>
  );
}
