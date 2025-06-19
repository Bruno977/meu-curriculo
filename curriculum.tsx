"use client";

import { useState, useEffect } from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Calendar,
  Code,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
// import MeProfile from "./profile.jpg";

export default function Component() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    "Full Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, textArray]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8">
        <div className="flex justify-end space-x-8">
          <a
            href="#experience"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Experiência
          </a>
          <a
            href="#education"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Educação
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Olá, me chamo Bruno,
              <br />
              <span className="text-blue-400 text-4xl lg:text-6xl">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Desenvolvedor front-end com mais de 4 anos de experiência em
              React, React Native, Next.js, JavaScript, TypeScript e outras
              tecnologias do ecossistema front-end. Atualmente, aprofundo meus
              conhecimentos em back-end com foco em Node.js e NestJS. Utilizo
              conceitos como DDD, SOLID e Clean Architecture, com o objetivo de
              me tornar um desenvolvedor full stack mais completo.
            </p>
            <a
              href="/meu-curriculo.pdf"
              download
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                <Image
                  src="/profile.jpg"
                  alt="Bruno Rodrigues"
                  width={400}
                  height={400}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section id="experience" className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-4xl font-bold mb-16 text-center">Experiência</h2>

        <div className="space-y-20">
          {/* Igma Experience */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:pl-20">
                <div className="bg-gray-800 rounded-2xl p-4 md:p-8 relative">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 hidden lg:block"></div>

                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Atual
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Desenvolvedor Front-end
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-blue-400 font-semibold text-lg">Igma</p>
                    <a
                      href="https://igma.do/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Fevereiro 2024 - Presente
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    • Desenvolvimento e manutenção de funcionalidades no Portal
                    do Paciente Sírio-Libanês, com foco em performance,
                    usabilidade e acessibilidade.
                  </p>
                  <p className="text-gray-300 py-4 leading-relaxed">
                    • Integração de APIs e colaboração com times de backend e
                    design, garantindo consistência entre plataformas web e
                    mobile.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    • Implementação de soluções responsivas e compatíveis com
                    múltiplos navegadores e dispositivos.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "React",
                      "React Native",
                      "TypeScript",
                      "Styled Components",
                      "Redux",
                      "Jest",
                      "Azure",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-4 md:p-6 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <h4 className="text-xl font-bold text-blue-400">
                      Hospital Sírio-Libanês: Portal do Paciente Web
                    </h4>
                    <a
                      href="https://paciente.hsl.org.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm"
                    >
                      Ver projeto <Globe className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Implementação de autenticação em dois fatores</li>
                    <li>
                      • Refatoração e otimização do fluxo de agendamento de
                      consultas
                    </li>
                    <li>
                      • Criação de fluxo para aceite de termos e condições de
                      uso
                    </li>
                    <li>• Desenvolvimento de testes automatizados</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-4 md:p-6 border border-green-500/20">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <h4 className="text-xl font-bold text-green-400">
                      Hospital Sírio-Libanês: Portal do Paciente APP
                    </h4>
                    <a
                      href="https://play.google.com/store/apps/details?id=br.org.hsl.siriolibanes&hl=pt_BR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-sm"
                    >
                      Ver na loja <Globe className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>
                      • Otimização dos fluxos de agendamento e aceite de termos
                    </li>
                    <li>
                      • Aprimoramento da experiência no pronto atendimento
                      digital
                    </li>
                    <li>• Desenvolvimento de testes automatizados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Koden Digital Experience */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-600 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:pl-20">
                <div className="bg-gray-800 rounded-2xl p-4 md:p-8 relative">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-purple-500 rounded-full border-4 border-gray-900 hidden lg:block"></div>

                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-purple-400" />
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      2 anos 6 meses
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Desenvolvedor Front-end
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-purple-400 font-semibold text-lg">
                      Koden Digital
                    </p>
                    <a
                      href="https://koden.digital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Setembro 2021 - Fevereiro 2024
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    • Desenvolvimento de interfaces responsivas e otimizadas
                    para e- commerces, sistemas internos e websites
                    corporativos.
                  </p>
                  <p className="text-gray-300 py-4 leading-relaxed">
                    • Customização e integração com plataformas como Flexy, Tray
                    Corp, Wake, Nuvem Shop e Tray.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    • Contato direto com clientes para entender necessidades e
                    requisitos dos projetos.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "React",
                      "TypeScript",
                      "Vue.js",
                      "Tailwind",
                      "Redux",
                      "Twig",
                      "Scriban",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-4 md:p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold mb-3 text-purple-400">
                    Contribuições e Aprendizados
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>
                      • Criação de lojas do zero, incluindo estrutura de
                      páginas, navegação e áreas administrativas, aprimorando
                      habilidades em organização de componentes e design de
                      sistemas escaláveis.
                    </li>
                    <li>
                      • Implementação de fluxo completo de autenticação e
                      cadastro, com login, recuperação de senha e validações,
                      fortalecendo conhecimentos em segurança.
                    </li>
                    <li>
                      • Desenvolvimento de fluxos de pagamento, desde a seleção
                      de produtos até o checkout e confirmação de pedido,
                      garantindo eficiência e integração com APIs.
                    </li>
                    <li>
                      • Construção de funcionalidades como carrinho, checkout e
                      dashboards, aplicando boas práticas de desenvolvimento e
                      design responsivo.
                    </li>
                  </ul>
                </div>

                {/* <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="text-xl font-bold mb-3 text-orange-400">
                    Key Achievements
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Desenvolvimento de dashboards administrativos</li>
                    <li>• Customização de plataformas de e-commerce</li>
                    <li>• Relacionamento direto com clientes</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Formação acadêmica
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-4 md:p-8 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Em andamento
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              MBA - Arquitetura Full Cycle
            </h3>
            <p className="text-blue-400 font-semibold text-lg mb-2">
              Full Cycle
            </p>
            <p className="text-gray-400 flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4" />
              Outubro 2024 - Junho 2026
            </p>
            <p className="text-gray-300">
              Especialização em arquitetura de software, microsserviços e
              DevOps.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600/10 to-teal-600/10 rounded-2xl p-4 md:p-8 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Concluído
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Bacharelado em Sistemas de Informação
            </h3>
            <p className="text-green-400 font-semibold text-lg mb-2">
              Uniredentor
            </p>
            <p className="text-gray-400 flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4" />
              2018 - 2021
            </p>
            <p className="text-gray-300">
              Formação sólida em desenvolvimento de software, banco de dados e
              engenharia de software.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Entre em Contato
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-4 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Contatos
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>(22) 99798-3656</span>
                </div>
                <a
                  href="mailto:brunorodrigues.silveira@gmail.com"
                  className="flex items-center gap-4 text-gray-300 underline"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>brunorodrigues.silveira@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>Itaperuna, RJ, Brasil</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Idiomas
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Inglês</span>
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                      Intermediário
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Leitura avançada, comunicação oral intermediária
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/bruno-rodrigues-78416319b/"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
            </a>
            <a href="https://github.com/Bruno977" target="_blank">
              <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Copyright ©{new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
