Pré-requisitos
Next.js (v14.0.0 ou superior)

Node.js (v14.0.0 ou superior)

npm (v6.0.0 ou superior)

Funcionalidades
Interface de Usuário, Navegação e Design

Através da combinação de Next.js + Tailwind + ShadCN/UI, foi criada uma interface moderna, atraente, intuitiva e totalmente responsiva.

Barra de Pesquisa

Foi implementada uma funcionalidade de busca utilizando o react-hook-form para gerenciar o formulário e o zod para validação dos dados inseridos.

Carrosséis Interativos

Possui carrosséis que exibem informações como profissionais da saúde, agendamentos, rótulos de destaques e especialidades médicas.

Seleção de Data e Hora com Sincronização de Local e Localização

Os usuários escolhem a data e o horário desejados para agendar uma consulta, com opções dinâmicas e atualizadas em tempo real.

Visualização de Disponibilidade

Exibe a disponibilidade de horários de forma clara e organizada, ajudando os usuários a encontrar o melhor momento para o agendamento.

Confirmação Instantânea

Após a confirmação do agendamento, os usuários recebem uma confirmação imediata e podem visualizar os detalhes da consulta agendada.

Cancelamento Simples

Caso seja necessário, os usuários poderão cancelar o agendamento de forma simples e rápida, mantendo uma sincronização de horários atualizada.

Sistema de Autenticação com NextAuth Integrado ao Google

Integração simplificada de login utilizando o serviço de autenticação OAuth do Google.

Armazenamento de Dados

Integração simplificada com o banco de dados PostgreSQL através do Prisma ORM e Supabase.

Tecnologias Utilizadas
Next.js 14: Framework React para desenvolvimento de aplicações web do lado do cliente e do servidor.

NextAuth.js: Biblioteca para autenticação em aplicações Next.js, suportando vários provedores de autenticação.

Próxima Navegação: Técnicas e métodos de navegação utilizados em aplicações Next.js.

TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.

TS-node: Execução de arquivos TypeScript diretamente no Node.js sem necessidade de compilação.

Zod: Biblioteca para validação de esquemas em aplicações TypeScript.

React.js: Biblioteca JavaScript para construção de interfaces de usuário (UI) interativas.

React Hook Form: Biblioteca para gerenciamento de formulários em aplicações React.

React Icons: Biblioteca de ícones para uso em aplicações React.

JSX: Extensão de sintaxe que permite escrever código JavaScript com marcação HTML, amplamente utilizada no desenvolvimento de componentes e interfaces de usuário em aplicações React.

TailwindCSS: Framework CSS para construção de interfaces de usuário com base em classes utilitárias.

Shadcn/ui: Componentes de interface para aplicações React, baseados no TailwindCSS.

Prisma ORM: ORM (Mapeamento Objeto-Relacional) para banco de dados, utilizado para modelagem e interação com o banco de dados.

Supabase: Plataforma de banco de dados e autenticação para aplicações web e mobile.

PostgreSQL: Banco de dados relacional open source utilizado no projeto.

Date-fns: Biblioteca JavaScript para manipulação de datas de forma fácil e eficiente.

Lucide-react: Biblioteca de ícones SVG para uso em aplicações React.

Vercel: Plataforma de hospedagem para implantação de aplicações web.

VSCode: Editor de código fonte utilizado para desenvolvimento do projeto.

Git: Sistema de controle de versão utilizado para gerenciar o código fonte do projeto.

Como Rodar o Projeto
Instale as dependências:

bash
Copy
npm install
Configure o Supabase:

Adicione suas credenciais do Supabase no projeto.

Inicie o servidor de desenvolvimento:

bash
Copy
npm run dev
Abra o navegador e acesse:

Copy
http://localhost:3000
Estrutura de Diretórios
/app: Código-fonte da aplicação.

/public: Arquivos públicos.
