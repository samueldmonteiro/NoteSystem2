# 📝 Sistema de Notas Colaborativo

Este é um projeto de um sistema de notas com funcionalidades de colaboração em tempo real, controle de versões, permissões personalizadas e gerenciamento de usuários. A aplicação foi desenvolvida com **Node.js**, **MongoDB** e **Mongoose**.

## 📦 Estrutura do Projeto

- backend/
  - src/config/ – Configurações do banco de dados e Passport.
  - src/controllers/ – Lógica de controle das rotas.
  - src/middleware/ – Middlewares para autenticação e validação 
  - src/models/ – Modelos Mongoose: usuários, notas, permissões, versões e sessões.
  - src/routes/ – Rotas da API.
  - src/utils/ – Código de inicialização do servidor.
  - src/services/ – Lógica de negócios.
  - src/validators/ – Validação de dados de entrada.
  - server.js – Configuração principal do servidor.
  - .env, package.json – Configuração do ambiente e dependências.

- frontend/ – Interface do usuário (a ser implementada).

---

## 🚀 Objetivos e Funcionalidades

### 🔧 Back-end

#### 🔐 Autenticação

- [x] Sistema de registro e login com validação
- [x] Autenticação JWT com tokens de acesso e refresh
- [x] Middleware de autenticação para rotas protegidas
- [x] Logout com invalidação de tokens
- [x] Renovação automática de tokens de acesso

#### 📝 Notas

- [x] Criar notas (Create)
- [x] Buscar notas do usuário (Read)
- [x] Atualizar notas com validação (Update)
- [x] Deletar notas (Delete)
- [ ] Implementar filtragem e busca por título, conteúdo ou tags
- [ ] Implementar sistema de histórico de versões

#### 👥 Permissões & Colaboração

- [ ] Gerenciar permissões por nota (leitura, escrita, etc.)
- [ ] Criar endpoints para sessões colaborativas

#### 🧪 Testes

- [ ] Implementar testes unitários (Jest ou outro)

### 💾 Banco de Dados

- [x] Modelar esquema de usuários (`User`)
- [x] Modelar esquema de notas (`Note`)
- [x] Modelar esquema de permissões (`Permission`)
- [x] Modelar versão de notas (`NoteVersion`)
- [x] Modelar sessões de colaboração (`CollaborationSession`)

### 🌐 Front-end (futuro)

- [ ] Criar interface com React e TailwindCSS
- [ ] Página de login/registro
- [ ] Dashboard com listagem e filtros de notas
- [ ] Editor de texto colaborativo
- [ ] Visualização do histórico de versões
- [ ] Painel de permissões e compartilhamento
- [ ] Indicação de presença em sessões colaborativas

---
### 🔧 Endpoints Principais

#### 🔐 Autenticação

- POST /api/users/register – Registro de novo usuário
- POST /api/users/login – Login
- POST /api/users/logout – Logout
- POST /api/users/refresh – Renova token

#### 📝 Notas

- POST /api/notes/createnote – Criar nota
- PUT /api/notes/updatenote/:id – Editar nota
- DELETE /api/notes/deletenote/:id – Deletar nota
- GET /api/notes/getnote/:id – Ver nota individual
- GET /api/notes/getallnotes – Ver todas as notas do usuário

---
## 🧠 Tecnologias Utilizadas
- **Backend**:
  - **Node.js** + **Express**
  - **MongoDB** + **Mongoose**
  - **JWT** para autenticação
  - **Passport.js** com estratégias Local e JWT
  - **bcryptjs** para hash de senhas
  - **express-validator** para validação

- **Frontend** (futuro):
  - React.js
  - TailwindCSS

---

## 📌 Como Executar

```bash
# Clone o repositório
git clone https://github.com/KauaLima157/NoteSystem2.git
cd NoteSystem2/backend

# Instale as dependências
npm install

# Configure o arquivo .env com as variáveis do MongoDB e JWT

# Inicie o servidor
npm run dev
