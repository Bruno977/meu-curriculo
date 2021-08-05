import React from "react";

import {
  Title,
  Container,
  ExperienceContainer,
  CardWorkOne,
  CardWorkTwo,
} from "./styles";

import { FaLaptopCode, FaDesktop } from "react-icons/fa";

export default function Experience() {
  return (
    <>
      <br id="experience" />
      <Title>
        <h2>
          <span></span> Experiência
        </h2>
      </Title>
      <Container>
        <ExperienceContainer>
          <div>
            <CardWorkOne>
              <h2>
                ITANET <FaDesktop />
              </h2>
              <div>
                <div className="occupation">
                  <strong>Analista de suporte computacional</strong>
                  <br />
                  <i>Início - Outubro de 2018</i>
                </div>

                <div className="description">
                  <strong>Descrição</strong>
                  <p>
                    Analista de suporte, trabalhando na montagem e manutenção de
                    computadores, NOC (Centro de operações de rede), instalação
                    de alarmes e câmeras.
                  </p>
                </div>
              </div>
            </CardWorkOne>
          </div>
          <div>
            <CardWorkTwo>
              <h2>
                J.V.S <FaLaptopCode />{" "}
              </h2>
              <div>
                <div className="occupation">
                  <strong>
                    Estágio em análise e desenvolvimento de sistemas Fullstack
                  </strong>
                  <br />
                  <i>Inicio - abril de 2021</i>
                </div>

                <div className="description">
                  <strong>Descrição</strong>
                  <p>
                    Desenvolvedor fullstack na J.V.S, trabalhando na criação de
                    sistemas para a empresa utilizando reactJS e nodeJS.
                  </p>
                </div>
              </div>
            </CardWorkTwo>
          </div>
        </ExperienceContainer>
      </Container>
    </>
  );
}
