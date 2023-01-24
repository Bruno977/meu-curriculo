import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../components/Title';
import { Grid, Container } from './styles';
import PortfolioItem from '../../components/PortfolioItem';

export const Projects = [
  {
    id: 1,
    name: 'Amt Solutions',
    href: 'https://amt-solution.vercel.app/',
  },
  {
    id: 2,
    name: 'Finanças',
    href: 'https://financa-self.vercel.app/login',
  },
  {
    id: 3,
    name: 'Pokedex',
    href: 'https://pokedex-next-plum.vercel.app/',
  },
  {
    id: 4,
    name: 'Demo',
    href: 'https://koden-bruno977.vercel.app/',
  },
];

function Portfolio() {
  return (
    <motion.section
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial={{ translateX: '-100%' }}
      animate={{ translateX: '0' }}
    >
      <Container>
        <Title>
          Meu <span>Portfólio</span>
          <p>Alguns projetos que desenvolvi</p>
        </Title>
        <Grid>
          {Projects &&
            Projects.map((project) => (
              <PortfolioItem
                key={project.id}
                href={project.href}
                project={project.name}
              />
            ))}
        </Grid>
      </Container>
    </motion.section>
  );
}

export default Portfolio;
