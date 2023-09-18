import { imagesCheckPay } from './checkpay';
import { imagesIcakbar } from './icakbar';
import { imagesZnt } from './znt/images';
export const ProjectsReact = [
  {
    id: 1,
    name: 'ZNT Digital',
    thumb: imagesZnt.thumb,
    images: imagesZnt.images,
    description: `    
    <div class="description-project">
    <h2>Desenvolvimento de um Sistema para Aprimoramento de Marketing Digital</h2>

    <h4>Visão Geral:</h4>
    <p>O projeto consistiu no desenvolvimento de um sistema voltado para auxiliar os clientes na otimização de suas estratégias de marketing digital. O sistema foi projetado com três perfis distintos: cliente, usuário e administrador. Cada perfil desempenhou um papel fundamental na eficácia do sistema, permitindo uma abordagem completa para o aprimoramento das estratégias de marketing digital.</p>

    <h4>Tecnologias Utilizadas:</h4>
    <p>Frontend desenvolvido com React, antd-design, Redux, Styled-Components e JavaScript.</p>

    <h4>Desafios Enfrentados:</h4>
    
    <p><strong>Gerenciamento de Mídia: </strong> Implementar um sistema de gerenciamento de imagens e vídeos, com a capacidade de ordenação personalizada dos itens pelo usuário.</p>
    
    <p><strong>Controle de Tempo: </strong> Criar um contador de tempo de execução para cada projeto, além de um contador geral para o tempo gasto durante o mês.</p>

    <h4>Soluções Implementadas:</h4>
    <p><strong>Gerenciamento de Mídia: </strong> Utilização do react-sortablejs para possibilitar a ordenação personalizada dos itens pelo usuário.</p>
    <p><strong>Controle de Tempo: </strong> Foi desenvolvido um componente dedicado ao contador, que capturava o tempo em segundos retornado pelo backend e o convertia em um total de tempo gasto. Também foi solicitado ao backend a criação de endpoints específicos para o controle de estado do contador, permitindo pausar e retomar o tempo.</p>

    <h4>Recursos e Funcionalidades Principais:</h4>
    <p>Criação de projetos completos, seguindo um processo passo a passo.</p>
    <p>Clone de um determinado projeto e a possibilidade de replicar o mesmo para tornar o processo mais rápido.</p>
    <p>Criar vários projetos simultaneamente, preenchendo apenas as informações obrigatórias, economizando tempo e esforço.</p>
    <p>Cada projeto possui seu próprio contador de tempo, permitindo um acompanhamento preciso das horas trabalhadas.</p>
    <p>Monitorar o tempo gasto durante o mês, proporcionando uma visão geral do tempo dedicado a diferentes projetos.</p>
    <p>Clientes têm a capacidade de solicitar alterações em projetos caso discordem de algum aspecto, facilitando a comunicação e colaboração.</p>
    <p>O sistema foi projetado para permitir uma comunicação fluida entre clientes e usuários, garantindo que as informações e feedback sejam transmitidos de maneira eficaz.</p>

    <h4>Responsabilidades:</h4>
    <p>Minha principal responsabilidade neste projeto foi atuar como desenvolvedor frontend, contribuindo para a criação da interface do usuário e aprimorando a experiência do cliente no sistema.</p>
    </div>
    `,
    skills: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'ANT-design',
      },
      {
        id: 3,
        name: 'JavaScript',
      },
      {
        id: 4,
        name: 'Styled-components',
      },
      {
        id: 5,
        name: 'Redux',
      },
    ],
  },
  {
    id: 2,
    name: 'CheckPay',
    thumb: imagesCheckPay.thumb,
    images: imagesCheckPay.images,
    description: `
      <div class="description-project">
        <h2>Desenvolvimento de um Sistema de Gerenciamento de Propostas de Carro.</h2>
        <h4>Visão Geral do Projeto:</h4>
        <p>Desenvolvimento de um sistema completo para o gerenciamento de propostas de carros, abrangendo desde o cadastro de propostas até o gerenciamento de pagamentos, com diferentes acessos e funcionalidades para vendedores, analistas, financeiros e administradores.</p>
        <h4>Tecnologias Utilizadas:</h4>
        <p>Frontend desenvolvido com Next , TypeScript e Radix UI.</p>
        <h4>Desafios Enfrentados:</h4>
        <p>Gerenciamento de datas para o pagamento.</p>
        <p>Coordenação das etapas de análise das propostas.</p>
        <h4>Soluções Implementadas:</h4>
        <p>Utilização do react-date-picker para o cadastro e gerenciamento de datas.</p>
        <p>Implementação de um sistema de etapas de análise, onde, após o início de uma análise, o status da proposta era automaticamente atualizado para refletir a etapa atual. A transição para a próxima análise só era possível após a aprovação da análise atual. Propostas reprovadas eram encaminhadas para o administrador para revisão, e, se aprovadas, retornavam ao analista para prosseguimento das etapas.</p>
        <h4>Recursos e Funcionalidades Principais:</h4>
        <p>Cadastro de propostas de carros.</p>
        <p>Quatro tipos de acesso: vendedor, analista, financeiro e administrador, cada um com suas próprias funcionalidades específicas.</p>
        <p>Vendedores podem criar novas propostas e acompanhar o progresso delas.</p>
        <p>Analistas são responsáveis pela análise das propostas e aprovação para a próxima fase.</p>
        <p>Financeiros gerenciam o pagamento das propostas.</p>
        <p>Administradores têm controle total sobre o sistema, incluindo a criação de datas de pagamento e tipos de pagamento, além do gerenciamento de propostas finalizadas, agendadas e ativas.</p>
        <h4>Responsabilidades:</h4>
        <p>Atuei como responsável pelo desenvolvimento frontend, implementando todas as funcionalidades do projeto.</p>
      </div>
      `,
    skills: [
      {
        id: 1,
        name: 'Next.js',
      },
      {
        id: 2,
        name: 'Typescript',
      },
      {
        id: 3,
        name: 'radix-ui',
      },
      {
        id: 4,
        name: 'formik',
      },
      {
        id: 5,
        name: 'yup',
      },
    ],
  },
  {
    id: 3,
    name: 'Icakbar',
    thumb: imagesIcakbar.thumb,
    images: imagesIcakbar.images,
    description: `
      <div class="description-project">
        <h2>Desenvolvimento de um sistema de cursos.</h2>
        <h4>Visão Geral do Projeto:</h4>
        <p>O projeto consistiu no desenvolvimento de uma plataforma educacional online dedicada a proporcionar uma experiência de aprendizado envolvente e altamente eficaz para os alunos. Esta plataforma foi projetada para abrigar uma ampla variedade de cursos em diversos tópicos, oferecendo uma abordagem flexível e inovadora para o ensino e aprendizado.</p>
        <h4>Tecnologias Utilizadas:</h4>
        <p>Para a construção deste sistema, foi utilizado um conjunto de tecnologias modernas que incluem Next.js, TypeScript, Tailwind CSS, Headless UI, Vimeo para conteúdo de vídeo, Formik e Yup para gerenciamento de formulários, bem como o Swiper para aprimorar a experiência de navegação dos usuários.
        </p>
        <h4>Desafios Enfrentados:</h4>
        <p>Um dos principais desafios encontrados durante o desenvolvimento do sistema foi o gerenciamento eficiente das aulas. Era necessário criar uma maneira intuitiva para os alunos acompanharem o progresso das aulas, possibilitando pausar e retomar o conteúdo, enquanto garantiamos que o progresso fosse registrado de forma precisa.
        </p>
        <h4>Soluções Implementadas:</h4>
        <p>Para superar o desafio do gerenciamento de aulas, foi implementado um contexto que simplificou a verificação do status de cada aula. As aulas eram liberas para conclusão quando restavam apenas 30 segundos para o término. Além disso, a interação dos usuários, como o início e pausa das aulas, acionava requisições ao backend para armazenar o tempo atual da aula. O uso do contexto facilitou o monitoramento eficaz do estado atual de cada aula.
        </p>
        <h4>Recursos e Funcionalidades Principais:</h4>
        <p>Geração automática de certificados para os alunos após a conclusão bem-sucedida de um curso.</p>
        <p>Controle flexível do progresso das aulas, permitindo que os alunos iniciem, pausam e retomem o conteúdo com interações em tempo real, que são sincronizadas com o backend.
        </p>
        <p>Gerenciamento de aulas disponíveis ou indisponíveis para os alunos, garantindo que o acesso ao conteúdo seja controlado com base nas configurações do curso.
        </p>
        
        <h4>Responsabilidades:</h4>
        <p>No decorrer deste projeto, desempenhei um papel central como responsável pelo desenvolvimento frontend. Isso incluiu a implementação de todas as funcionalidades-chave do sistema, contribuindo para uma experiência de usuário fluida e altamente interativa.</p>
      </div>
      `,
    skills: [
      {
        id: 1,
        name: 'Next.js',
      },
      {
        id: 2,
        name: 'Typescript',
      },
      {
        id: 3,
        name: 'radix-ui',
      },
      {
        id: 4,
        name: 'formik',
      },
      {
        id: 5,
        name: 'yup',
      },
    ],
  },
];
