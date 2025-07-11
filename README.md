# 📝 Sistema de Notas Colaborativo

Este é um projeto de um sistema de notas com funcionalidades de colaboração em tempo real, controle de versões, permissões personalizadas e gerenciamento de usuários. A aplicação foi desenvolvida com **Node.js**, **MongoDB** e **Mongoose**.

## 📦 Estrutura do Projeto

- backend/
  - src/config/ – Configurações do banco de dados.
  - src/controllers/ – Lógica de controle das rotas.
  - src/middleware/ – Middlewares para autenticação e validação (futuramente).
  - src/models/ – Modelos Mongoose: usuários, notas, permissões, versões e sessões.
  - src/routes/ – Rotas da API.
  - src/utils/ – Código de inicialização do servidor.
  - .env, package.json – Configuração do ambiente e dependências.

- frontend/ – Interface do usuário (a ser implementada).

---

## 🚀 Objetivos e Funcionalidades

### 🔧 Back-end

- [ ] Criar endpoints REST para autenticação (login, registro, verificação)
- [ ] Criar CRUD para notas (create, read, update, delete)
- [ ] Implementar filtragem e busca por título, conteúdo ou tags
- [ ] Gerenciar permissões por nota
- [ ] Implementar sistema de histórico de versões
- [ ] Criar endpoints para sessões colaborativas
- [ ] Proteger rotas com autenticação e autorização
- [ ] Implementar testes unitários (Jest ou outro)

### 💾 Banco de Dados

- [x] Modelar esquema de usuários (`User`)
- [x] Modelar esquema de notas (`Note`)
- [x] Modelar esquema de permissões (`Permission`)
- [x] Modelar versão de notas (`NoteVersion`)
- [x] Modelar sessões de colaboração (`CollaborationSession`)
- [ ] Criar índices no MongoDB para otimizar busca
- [ ] Criar seeds (dados iniciais de exemplo)

### 🌐 Front-end (futuro)

- [ ] Criar interface com React e TailwindCSS
- [ ] Página de login/registro
- [ ] Dashboard com listagem e filtros de notas
- [ ] Editor de texto colaborativo
- [ ] Visualização do histórico de versões
- [ ] Painel de permissões e compartilhamento
- [ ] Indicação de presença em sessões colaborativas

---

## 🧠 Tecnologias Utilizadas

- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticação
- TailwindCSS (front-end futuro)
- React.js (front-end futuro)

---

## 📌 Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sistema-notas.git
cd sistema-notas

# Instale as dependências
npm install

# Configure o arquivo .env com as variáveis do MongoDB e JWT

# Inicie o servidor
npm run dev
