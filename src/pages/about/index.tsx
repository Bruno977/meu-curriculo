import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import { MyProfile, AboutMe } from './styles';

function About() {
  return (
    <motion.main
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial={{ translateX: '-100%' }}
      animate={{ translateX: '0' }}
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
          </AboutMe>
        </MyProfile>
      </section>
    </motion.main>
  );
}

export default About;
