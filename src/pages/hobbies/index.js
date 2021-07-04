import React from "react";

import Carousel from "./Carousel";
import { FaFish } from "react-icons/fa";

import {
  Container,
  HobbiesContainer,
  Title,
  CardCarousel,
  CardDescription,
} from "./styles";

export default function Hobbies() {
  return (
    <>
      <br id="hobbies" />
      <Title>
        <h2>
          <span></span> Sobre mim
        </h2>
      </Title>
      <Container>
        <div>
          <HobbiesContainer>
            <div>
              <CardCarousel>
                <Carousel />
              </CardCarousel>
            </div>
            <div>
              <CardDescription>
                <h2>
                  Hobbies <FaFish />
                </h2>

                <br />
                <strong> Pescaria</strong>
                <br />
                <div>
                  <p>asdjnacndcuoinsdnmioewhufdbsd</p>
                </div>
              </CardDescription>
            </div>
          </HobbiesContainer>
        </div>
      </Container>
    </>
  );
}
