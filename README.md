## ⚙ Pré-requisitos

- **Next.js** (v14.0.0 ou superior)
- **Node.js** (v14.0.0 ou superior)
- **npm** (v6.0.0 ou superior)

## 🚀 Funcionalidades:

### **Interface de usuário, navegação e design**
- Através da combinação de `Next.js` + `TailWind` + `ShadCN/UI`, foi criada uma interface moderna, atraente, intuitiva e totalmente responsiva.

### **Barra de pesquisa**
- Foi implementada uma funcionalidade de busca utilizando o `react-hook-form` para gerenciar o formulário e o `zod` para validação dos dados inseridos.

### **Carrosséis Interativos**
- Possui carrosséis que exibem informações como profissionais da saúde, agendamentos, rótulos de destaques e especialidades médicas.

### **Seleção de Data e Hora com sincronização de horário e localização**
- Os usuários podem selecionar a data e o horário desejados para agendar um serviço, com opções dinâmicas e atualizadas em tempo real.

### **Visualização de Disponibilidade**
- Exibe a disponibilidade de horários de forma clara e organizada, ajudando os usuários a encontrar o melhor momento para o agendamento.

### **Confirmação Instantânea**
Após a confirmação do agendamento, os usuários recebem uma confirmação imediata e podem visualizar os detalhes da consulta agendada.

### **Cancelamento Simples**
- Caso seja necessário, os usuários podem cancelar o agendamento de forma simples e rápida, mantendo a sincronização de horários atualizada.

### **Sistema de autenticação com `NextAuth` integrado ao `Google`**
- Integração simplificada de login utilizando o serviço de autenticação `OAuth` do Google.

### **Armazenamento de dados**
- Integração simplificada com o Banco de Dados `PostgreSQL` através do `Prisma ORM` e `Supabase`.

---

## 🛠 Tecnologias Utilizadas

- **Next.js 14**: Framework React para desenvolvimento de aplicações web do lado do cliente e do servidor.
- **NextAuth.js**: Biblioteca para autenticação em aplicações Next.js, suportando vários provedores de autenticação.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **TS-node**: Execução de arquivos TypeScript diretamente no Node.js sem necessidade de compilação.
- **Zod**: Biblioteca para validação de esquemas em aplicações TypeScript.
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário (UI) interativas.
- **React Hook Form**: Biblioteca para gerenciamento de formulários em aplicações React.
- **React Icons**: Biblioteca de ícones para uso em aplicações React.
- **JSX**: Extensão de sintaxe que permite escrever código JavaScript com marcação HTML, amplamente utilizada no desenvolvimento de componentes e interfaces de usuário em aplicações React.
- **TailwindCSS**: Framework CSS para construção de interfaces de usuário com base em classes utilitárias.
- **Shadcn/ui**: Componentes de interface para aplicações React, baseados no TailwindCSS.
- **Prisma ORM**: ORM (Mapeamento Objeto-Relacional) para banco de dados, utilizado para modelagem e interação com o banco de dados.
- **Supabase**: Plataforma de banco de dados e autenticação para aplicações web e mobile.
- **PostgreSQL**: Banco de dados relacional open source utilizado no projeto.
- **Date-fns**: Biblioteca JavaScript para manipulação de datas de forma fácil e eficiente.
- **Lucide-react**: Biblioteca de ícones SVG para uso em aplicações React.
- **Vercel**: Plataforma de hospedagem para implantação de aplicações web.
- **VSCode**: Editor de código fonte utilizado para desenvolvimento do projeto.
- **Git**: Sistema de controle de versão utilizado para gerenciar o código fonte do projeto.

---

## 💻 Como Rodar o Projeto

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Configure o Supabase:**
   - Adicione suas credenciais do Supabase no projeto.

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

---

## 📚 Estrutura de Diretórios

```
/app       - Código-fonte da aplicação.
/public    - Arquivos públicos.
```

---

## 📸 Screenshot do Projeto

![Screenshot do Projeto](https://cdn.discordapp.com/attachments/1349523436057268225/1349911112572993706/foto1__2025-03-13_at_20.38.15.jpeg?ex=67d4d231&is=67d380b1&hm=2b9bbfa064e21fd7f3c2b7dbfed4b42fa0be841f3609a0ed8bcb61b6e7f3bac9&)

![Screenshot do Projeto](https://cdn.discordapp.com/attachments/1349523436057268225/1349916467566481549/foto2__2025-03-13_at_21.11.51.jpeg?ex=67d4d72e&is=67d385ae&hm=e5921a2765f1764ce65fb30fa28087d0470843b2b985a7ebcc3ea40339a17ce5&)

![Screenshot do Projeto](https://cdn.discordapp.com/attachments/1349523436057268225/1349918132441190430/foto3_2025-03-13_at_21.52.24.jpeg?ex=67d4d8bb&is=67d3873b&hm=9b08ccf38eab8dabb9a61b736b0e4de0acc31c104972d4d3ad17dbf0aa7a62b9&)

