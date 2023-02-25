import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Title from '../../components/Title';
import { Aside, Form, Columns } from './styles';
import {
  Envelope,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  WhatsappLogo,
} from 'phosphor-react';
import { Button } from '../../components/Button';

function Contact() {
  const form = useRef<null | HTMLFormElement>(null);

  const SERVICE_ID: string | undefined = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID: string | undefined = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY: string | undefined = process.env.REACT_APP_PUBLIC_KEY;

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.current && SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }

  return (
    <motion.section
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial={{ translateX: '-100%' }}
      animate={{ translateX: '0' }}
    >
      <section className="container">
        <Title>
          Entre em <span>Contato</span>
          <p>Estou aberto para ouvir novas propostas.</p>
        </Title>
        <Columns>
          <Aside>
            <ul>
              <li>
                <a href="tel:+5522997983656" target="_blank" rel="noreferrer">
                  <p>Telefone</p>
                  <div>
                    <WhatsappLogo size={20} color="#00B37E" />
                    <span>(22) 99798-3656</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:brunorodrigues.silveira@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Email</p>
                  <div>
                    <Envelope size={20} color="#00B37E" />
                    <span>brunorodrigues.silveira@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Bruno977"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>GitHub</p>
                  <div>
                    <GithubLogo size={20} color="#00B37E" />
                    <span>Bruno977</span>
                  </div>
                </a>
              </li>
              <li>
                <p>Redes Sociais</p>
                <a
                  href="https://www.instagram.com/bruunoo.rodrigues/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={24} color="#00B37E" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100001660880731"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookLogo size={24} color="#00B37E" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-rodrigues-78416319b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo size={24} color="#00B37E" />
                </a>
              </li>
            </ul>
          </Aside>
          <Form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Seu Nome</label>
            <input
              type="text"
              placeholder="Nome"
              id="user_name"
              name="user_name"
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="user_email"
              name="user_email"
            />
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Mensagem"
            ></textarea>
            <Button type="submit">
              <PaperPlaneTilt size={20} />
              <span>Enviar</span>
            </Button>
          </Form>
        </Columns>
      </section>
    </motion.section>
  );
}

export default Contact;
