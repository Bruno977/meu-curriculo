import React from 'react';
import { User, Suitcase } from 'phosphor-react';
import Avatar from '../../components/Avatar';
import { ButtonLink } from '../../components/Button';
import { Title } from '../../styles/global';
import { GridColumns, AboutMe, ButtonsContainer } from './styles';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <motion.div
        className="overflow-home-top"
        initial={{ height: '50%' }}
        animate={{ height: '0' }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="overflow-home-bottom"
        initial={{ height: '50%' }}
        animate={{ height: '0' }}
        transition={{ duration: 0.8 }}
      />
      <section className="container" style={{ margin: '2.5rem 0' }}>
        <GridColumns>
          <Avatar />
          <AboutMe>
            <h4>Olá, Bem-vindo !</h4>
            <Title>
              Meu nome é <strong>Bruno Rodrigues</strong>
            </Title>
            <p>
              Sou Desenvolvedor Front-end e moro em Itaperuna, Rio de Janeiro.
            </p>
            <p>
              Sou apaixonado pelo Javascript e atualmente venho me aperfeiçoando
              <br />
              em React utilizando typescript.
            </p>
            <ButtonsContainer>
              <ButtonLink path="about" variant="solid">
                <User size={24} />
                <span>Veja mais sobre mim</span>
              </ButtonLink>

              <ButtonLink path="/portfolio" variant="outline">
                <Suitcase size={24} />
                <span>Portfólio</span>
              </ButtonLink>
            </ButtonsContainer>
          </AboutMe>
        </GridColumns>
      </section>
    </>
  );
}

export default Home;
