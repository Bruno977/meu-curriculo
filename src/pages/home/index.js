import React from "react";
import Typical from "react-typical";
import {
  Container,
  Card,
  InformationsHomePage,
  ProfileContainer,
} from "./style";

export default function Home() {
  return (
    <Container id="home">
      <ProfileContainer>
        <div>
          <Card>
            <img src="https://github.com/bruno977.png" alt="" />
            <h2>Bruno Rodrigues</h2>
            <p>Programador</p>
          </Card>
        </div>

        <div>
          <InformationsHomePage>
            <h2>Olá!</h2>
            <div>
              <Typical
                loop={Infinity}
                steps={[
                  "Olá, meu nome é Bruno.",
                  3000,
                  "Tenho 24 anos, moro em Itaperuna, Rio de Janeiro.",
                  3000,
                ]}
                wrapper="p"
              />
            </div>
          </InformationsHomePage>
        </div>
      </ProfileContainer>
    </Container>
  );
}
