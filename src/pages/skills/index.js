import React from "react";

import {
  FaUserGraduate,
  FaCheck,
  FaClipboardList,
  FaComment,
} from "react-icons/fa";

import {
  Container,
  CardCourses,
  CardCollege,
  CardLanguage,
  EducationContainer,
  Tittle,
} from "./style";
export default function Skills() {
  return (
    <>
      <Tittle id="education">
        <h2>
          <span></span> Formação
        </h2>
      </Tittle>

      <Container>
        <div>
          <EducationContainer>
            <div>
              <CardCourses>
                <div>
                  <h2>
                    Cursos <FaClipboardList color="#333" />{" "}
                  </h2>
                  <ul>
                    <li>
                      <FaCheck />{" "}
                      <strong>
                        Curso técnico em manutenção e suporte em informática.{" "}
                      </strong>
                      <div>
                        <i>01/02/2020 - Senac</i>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <FaCheck /> <strong>HMTL avançado.</strong>
                      <div>
                        <i>31/01/2020 - fundação bradesco</i>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <FaCheck /> <strong>HTML & CSS na prática</strong>
                      <div>
                        <i>05/02/2020 - fundação bradesco</i>
                      </div>
                    </li>
                    <li>
                      <FaCheck /> <strong>Introdução ao javascript</strong>
                      <div>
                        <i>10/02/2020 - fundação bradesco</i>
                      </div>
                    </li>
                    <li>
                      <FaCheck /> <strong>Semana Omnistack</strong>
                      <div>
                        <i>29/03/2020 - rocketseat</i>
                      </div>
                    </li>

                    <li>
                      <FaCheck /> <strong>Bootcamp gostack</strong>
                      <div>
                        <i>19/04/2021 - rocketseat</i>
                      </div>
                    </li>

                    <li>
                      <FaCheck /> <strong>NLW 4 & NLW 5</strong>
                      <div>
                        <i> 27/02/2021 - 23/06/2021 - rocketseat</i>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardCourses>
            </div>
            <div>
              <CardCollege>
                <div>
                  <h2>
                    Faculdade <FaUserGraduate />
                  </h2>

                  <ul>
                    <li>
                      <FaCheck /> <strong> Sistema de informação</strong>
                      <div>
                        <i>8º período - Uniredentor</i>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardCollege>
            </div>
            <div>
              <CardLanguage>
                <div>
                  <h2>
                    Lingua <FaComment color="#333" />
                  </h2>
                  <ul>
                    <li>
                      {" "}
                      <FaCheck /> <strong>Inglês intermediario</strong>
                      <div>
                        <i>20/06/2019 - Random</i>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardLanguage>
            </div>
          </EducationContainer>
        </div>
      </Container>
    </>
  );
}
