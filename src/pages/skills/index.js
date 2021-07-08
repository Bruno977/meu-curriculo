import React from "react";

import { FaCode } from "react-icons/fa";

import { Container, Title, CardSkills } from "./styles";

export default function SKills() {
  return (
    <>
      <br id="skills" />
      <Title>
        <h2>
          <span></span> Habilidades
        </h2>
      </Title>
      <Container>
        <div>
          <CardSkills>
            <div>
              <h2>
                Linguagens de programação & Ferramentas.{" "}
                <FaCode className="icon-code" />
              </h2>
              <ul>
                <li>
                  <strong>Html</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "50%" }}></div>
                    </div>
                    <div>
                      <i>60%</i>{" "}
                    </div>
                  </div>
                </li>

                <li>
                  <strong>Css</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "50%" }}></div>
                    </div>
                    <div>
                      <i>60%</i>{" "}
                    </div>
                  </div>
                </li>

                <li>
                  <strong>Javascript </strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "50%" }}></div>
                    </div>
                    <div>70%</div>
                  </div>
                </li>
                <li>
                  <strong>ReactJS</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "50%" }}></div>
                    </div>
                    <div>
                      <i>50%</i>{" "}
                    </div>
                  </div>
                </li>
                <li>
                  <strong>NodeJS</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "40%" }}></div>
                    </div>
                    <div>
                      <i>40%</i>{" "}
                    </div>
                  </div>
                </li>
                <li>
                  <strong>Git/Github</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "60%" }}></div>
                    </div>
                    <div>
                      <i>60%</i>{" "}
                    </div>
                  </div>
                </li>
                <li>
                  <strong>Scrum</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "40%" }}></div>
                    </div>
                    <div>
                      <i>40%</i>{" "}
                    </div>
                  </div>
                </li>
                <li>
                  <strong>Linux</strong>

                  <div className="cointainer-progressbar">
                    <div className="progressbar">
                      <div style={{ width: "80%" }}></div>
                    </div>
                    <div>
                      <i>80%</i>{" "}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardSkills>
        </div>
      </Container>
    </>
  );
}
