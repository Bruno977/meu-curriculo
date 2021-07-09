import React from "react";
import emailjs from "emailjs-com";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {
  Title,
  Container,
  CardContacts,
  CardEmail,
  CardFindMe,
  CardSocialNetwork,
} from "./styles";

import {
  FaPhoneAlt,
  FaSearchLocation,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contacts() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9ae9un",
        "template_ebhvb9n",
        e.target,
        "user_Uf17t9B3wxY80nRPRq8H5"
      )
      .then(
        (result) => {
          alert("Email enviado");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <br id="contacts" />
      <Title>
        <h2>
          <span></span>Contatos
        </h2>
      </Title>
      <Container>
        <div>
          <CardContacts>
            <div>
              <CardEmail>
                <h2>
                  Envie um e-mail <FaEnvelope color="#333" />
                </h2>
                <form onSubmit={sendEmail}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Nome"
                      variant="outlined"
                      color="primary"
                      fullWidth
                      name="from_name"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="E-mail"
                      type="email"
                      variant="outlined"
                      color="primary"
                      fullWidth
                      name="user_email"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Assunto"
                      variant="outlined"
                      color="primary"
                      fullWidth
                      name="subject"
                    />
                  </div>

                  <div>
                    <TextField
                      id="standard-textarea"
                      label="Mensagem"
                      variant="outlined"
                      rows={4}
                      fullWidth
                      multiline
                      name="message"
                    />
                  </div>
                  <div>
                    <Button type="submit" variant="outlined" className="button">
                      Enviar
                    </Button>
                  </div>
                </form>
              </CardEmail>
            </div>

            <div>
              <CardFindMe>
                <h2>
                  Me encontre <FaSearchLocation color="#333" />
                </h2>
                <div>
                  <div>
                    <FaPhoneAlt size={30} color="#333" />
                    <strong>+55 (22) 99798-3656</strong>
                  </div>
                  <div>
                    <FaWhatsapp size={30} color="#333" />
                    <strong>+55 (22) 99798-3656</strong>
                  </div>
                  <div>
                    <FaEnvelope size={30} color="#333" />
                    <strong className="email">
                      brunorodrigues.silveira@gmail.com
                    </strong>
                  </div>
                  <div>
                    <FaSearchLocation size={30} color="#333" />
                    <strong>Itaperuna</strong>
                  </div>
                </div>
              </CardFindMe>
            </div>
          </CardContacts>
          <CardSocialNetwork>
            <div>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100001660880731">
                  <FaFacebookSquare size={30} />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/bruunoo.rodrigues/">
                  <FaInstagram size={30} />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/bruno-rodrigues-78416319b/">
                  <FaLinkedin size={30} />
                </a>
              </div>
              <div>
                <a href="https://github.com/Bruno977">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </CardSocialNetwork>
        </div>
      </Container>
    </>
  );
}
