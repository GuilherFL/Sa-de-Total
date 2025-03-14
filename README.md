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
- Possui carrosséis que exibem as barbearias, agendamentos, seções de destaques e de barbeiros.

### **Seleção de Data e Hora com sincronização de horário e localização**
- Os usuários podem selecionar a data e o horário desejados para agendar um serviço, com opções dinâmicas e atualizadas em tempo real.

### **Visualização de Disponibilidade**
- Exibe a disponibilidade de horários de forma clara e organizada, ajudando os usuários a encontrar o melhor momento para o agendamento.

### **Confirmação Instantânea**
- Após a confirmação do agendamento, os usuários recebem uma confirmação imediata e podem visualizar os detalhes do serviço agendado.

### **Cancelamento Simples**
- Caso seja necessário, os usuários podem cancelar o agendamento de forma simples e rápida, mantendo a sincronização de horários atualizada.

### **Sistema de autenticação com `NextAuth` integrado ao `Google`**
- Integração simplificada de login utilizando o serviço de autenticação `OAuth` do Google.

### **Armazenamento de dados**
- Integração simplificada com o Banco de Dados `PostgreSQL` através do `Prisma ORM` e `Supabase`.
