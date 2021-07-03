import React from "react";
import "./global.css";
import Home from "./pages/home";
import SideBar from "./pages/sidebar";
import Education from "./pages/education";
import Skills from "./pages/skills";

import { Container, AlignCenter } from "./styles";

export default function App() {
  return (
    <>
      <Container>
        <SideBar />
        <AlignCenter>
          <Home />
          <Education />
          <Skills />
        </AlignCenter>
      </Container>
    </>
  );
}
