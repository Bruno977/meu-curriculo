import React from "react";
import "./global.css";
import Home from "./pages/home";
import SideBar from "./pages/slidebar1/Layout";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Hobbies from "./pages/hobbies";
import Contacts from "./pages/contacts";

import { Container, AlignCenter } from "./styles";

export default function App() {
  return (
    <>
      <Container>
        <nav>
          <SideBar />
        </nav>
        <AlignCenter>
          <section>
            <Home />
          </section>

          <section>
            <Education />
          </section>

          <section>
            <Skills />
          </section>

          <section>
            <Experience />
          </section>

          <section>
            <Hobbies />
          </section>

          <footer>
            <Contacts />
          </footer>
        </AlignCenter>
      </Container>
    </>
  );
}
