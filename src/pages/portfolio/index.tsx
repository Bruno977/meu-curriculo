import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../components/Title';

function Portfolio() {
  return (
    <motion.section
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial={{ translateX: '-100%' }}
      animate={{ translateX: '0' }}
    >
      <div className="container">
        <Title>
          Meu <span>Portfólio</span>
          <p>Alguns projetos que desenvolvi</p>
        </Title>
      </div>
    </motion.section>
  );
}

export default Portfolio;
