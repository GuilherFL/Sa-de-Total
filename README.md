⚙ Pré-requisitos
Next.js (v14.0.0 ou superior)
Node.js (v14.0.0 ou superior)
npm (v6.0.0 ou superior)
🚀 Funcionalidades:
 Interface de usuário, navegação e design

Através da combinação de Next.js + Tailwind + ShadCN/UI foi criado uma interface moderna, atraente, intuitiva e totalmente responsiva.

 Barra de pesquisa

Foi implementado uma funcionalidade de busca utilizando o react-hook-form para gerenciar o formulário e o zod para validação dos dados inseridos.

 Carrosséis Interativos

Possui carrosséis que exibem as barbearias, agendamentos, seções de destaques e de barbeiros.

 Seleção de Data e Hora com sincronização de horário e localização

Os usuários podem escolher a data e o horário desejados para agendar um serviço, com opções dinâmicas e atualizadas em tempo real.

 Visualização de Disponibilidade

Exibi a disponibilidade de horários de forma clara e organizada, ajudando os usuários a encontrar o melhor momento para o agendamento.

 Confirmação Instantânea

Após a confirmação do agendamento, os usuários recebem uma confirmação imediata e podem visualizar os detalhes do serviço agendado.

 Cancelamento Simples

Caso seja necessário, os usuários podem cancelar o agendamento de forma simples e rápida, mantendo a sincronização de horários atualizada.

 Sistema de autenticação com o NextAuth integrado ao Google

Integração simplificada de login utilizando serviço de autenticação OAuth do Google.

 Armazenamento de dados

Integração simplificada com o Banco de Dados PostgreSQL atravéz do Prisma ORM e Supabase.

🛠 Tecnologias Utilizadas
Next.14:
Framework React para desenvolvimento de aplicações web do lado do cliente e do servidor.

NextAuth.js:
Biblioteca para autenticação em aplicações Next.js, suportando vários provedores de autenticação.

Next Navigation:
Técnicas e métodos de navegação utilizados em aplicações Next.js.

Typescript:
Linguagem de programação que adiciona tipagem estática ao JavaScript.

TS-node:
Execução de arquivos TypeScript diretamente no Node.js sem necessidade de compilação.

Zod:
Biblioteca para validação de esquemas (schemas) em aplicações TypeScript.

React.js:
Biblioteca JavaScript para construção de interfaces de usuário (UI) interativas.

React Hook Form:
Biblioteca para gerenciamento de formulários em aplicações React.

React Icons:
Biblioteca de ícones para uso em aplicações React.

JSX
Extensão de sintaxe que permite escrever código JavaScript com marcação HTML, amplamente utilizado no desenvolvimento de componentes e interfaces de usuário em aplicações React.

TailwindCSS:
Framework CSS para construção de interfaces de usuário com base em classes utilitárias.

Shadcn/ui:
Componentes de interface para aplicações React, baseados no TailwindCSS.

Prisma ORM:
ORM (Object-Relational Mapping) para banco de dados, utilizado para modelagem e interação com o banco de dados.

Supabase:
Plataforma de banco de dados e autenticação para aplicações web e mobile.

PostgresSQL:
Banco de dados relacional open source utilizado no projeto.

Date-fns:
Biblioteca JavaScript para manipulação de datas de forma fácil e eficiente.

Lucide-react:
Biblioteca de ícones SVG para uso em aplicações React.

Vercel:
Plataforma de hospedagem para implantação de aplicações web.

Vscode:
Editor de código fonte utilizado para desenvolvimento do projeto.

Git:
Sistema de controle de versão utilizado para gerenciar o código fonte do projeto.

💻 Como Rodar o Projeto
Instale as dependências: npm install
Configure o Supabase: Adicione suas credenciais.
Inicie o servidor de desenvolvimento: npm run dev
Abra o navegador e acesse http://localhost:3000
📁 Estrutura de Diretórios
/app: Código-fonte da aplicação.
/public: Arquivos públicos.
