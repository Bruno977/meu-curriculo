import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import {
  MyProfile,
  AboutMe,
  Divisor,
  ContainerExperienceEducation,
  GridProgress,
} from './styles';
import { Button } from '../../components/Button';
import TimeLine from '../../components/TimeLine';
import TitleSection from '../../components/TitleSection';
import ProgressBar from '../../components/ProgressBar';
import { DownloadSimple } from 'phosphor-react';

function About() {
  function downloadCV() {
    fetch('curriculo.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'curriculo.pdf';
        alink.click();
      });
    });
  }
  return (
    <motion.main
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial={{ translateX: '-100%' }}
      animate={{ translateX: '0' }}
      style={{ marginBottom: '2.5rem' }}
    >
      <section className="container">
        <Title>
          Sobre <span>Mim</span>
          <p>Sou desenvolvedor Front-end</p>
        </Title>
        <MyProfile>
          <Avatar />
          <AboutMe>
            <ul>
              <li>
                <p>Primeiro Nome</p>
                <span>Bruno </span>
              </li>
              <li>
                <p>Sobrenome</p>
                <span>Rodrigues </span>
              </li>
              <li>
                <p>Nascimento</p>
                <span>19/04/1997</span>
              </li>
              <li>
                <p>Nacionalidade</p>
                <span>Brasileira</span>
              </li>
              <li>
                <p>Endereço</p>
                <span>Itaperuna - RJ</span>
              </li>
            </ul>
            <ul>
              <li>
                <p>Contato</p>
                <a href="tel:+5522997983656">(22) 99798-3656</a>
              </li>
              <li>
                <p>Email</p>
                <a
                  href="mailto:brunorodrigues.silveira@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  brunorodrigues.silveira@gmail.com
                </a>
              </li>
              <li>
                <p>Instagram</p>
                <a
                  href="https://www.instagram.com/bruunoo.rodrigues/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clique aqui
                </a>
              </li>
              <li>
                <p>GitHub</p>
                <a
                  href="https://github.com/Bruno977"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clique aqui
                </a>
              </li>
              <li>
                <p>Linkedin</p>
                <a
                  href="https://www.linkedin.com/in/bruno-rodrigues-78416319b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clique aqui
                </a>
              </li>
            </ul>
            <div className="button-container">
              <Button type="button" variant="solid" onClick={downloadCV}>
                <DownloadSimple size={24} />
                <span>Download Cv</span>
              </Button>
            </div>
          </AboutMe>
        </MyProfile>
        <Divisor />
      </section>

      <section className="container">
        <ContainerExperienceEducation>
          <div>
            <TitleSection>Experiência</TitleSection>
            <TimeLine
              date="set de 2021"
              title="Desenvolvedor FrontEnd - Koden"
              description="Trabalho com projetos e-commerce nas plataformas flexy e tray corp utilizando twig, javascript, html e css.
              Também utilizo Vue e React em alguns projetos da empresa."
            />
            <TimeLine
              date="abr de 2021 - nov de 2021"
              title="Analise e desenvolvimento de sistemas - J.V.S"
              description="Estágio prestado pela faculdade,
               onde atuei no desenvolvimento de um sistema para gerenciamento interno da empresa."
            />
            <TimeLine
              date="abr de 2021 - nov de 2021"
              title="Analista de suporte computacional - Itanet"
              description="Trabalhei como TI interno, realizando manutenção de computadores, redes e NOC."
            />
          </div>
          <div>
            <TitleSection>Educação</TitleSection>
            <TimeLine
              date="2018 - 2021"
              title="Sistemas de informação - UniRedentor"
              description="Graduado em sistemas de informação"
            />
          </div>
        </ContainerExperienceEducation>
      </section>

      <section className="container">
        <TitleSection>Habilidades</TitleSection>
        <GridProgress>
          <ProgressBar skill="Javascript" progress="80%" />
          <ProgressBar skill="Css" progress="85%" />
          <ProgressBar skill="Sass" progress="65%" />
          <ProgressBar skill="Styled components" progress="75%" />
          <ProgressBar skill="Html" progress="90%" />
          <ProgressBar skill="React" progress="65%" />
          <ProgressBar skill="Vue" progress="40%" />
          <ProgressBar skill="TypeScript" progress="50%" />
          <ProgressBar skill="Git/GitHub" progress="60%" />
          <ProgressBar skill="Linux" progress="60%" />
          <ProgressBar skill="Twig" progress="55%" />
          <ProgressBar skill="Figma" progress="50%" />
        </GridProgress>
      </section>
    </motion.main>
  );
}

export default About;
