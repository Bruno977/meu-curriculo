import React from "react";
import "./global.css";
import Home from "./pages/home";
import SideBar from "./pages/sidebar";
import Skills from "./pages/skills";

import { Container } from "./styles";

export default function App() {
  return (
    <>
      <Container>
        <div>
          <SideBar />
        </div>
        <div>
          <Home />
          <Skills />
        </div>
      </Container>
    </>
  );
}
