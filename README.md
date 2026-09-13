# Sistema de Login com JWT

Aplicação de autenticação desenvolvida com **Node.js** no backend e **React.js + Vite** no frontend. O sistema utiliza JWT para autenticação e PostgreSQL para armazenamento dos dados.

## Demonstração

### Tela de login

![Tela de login](img/login.png)

### Dashboard

![Dashboard](img/dashboard.png)

## Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- JWT e bcrypt
- React.js
- Vite
- Axios

## Pré-requisitos

- Node.js instalado
- npm instalado
- PostgreSQL 15 ou superior
- Git instalado

## Como baixar o projeto

Substitua `<URL_DO_REPOSITORIO>` pelo endereço deste repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd login-auth-jwt-exemplo
```

## Configuração do backend

Entre na pasta do backend e instale as dependências:

```bash
cd backend
npm install
```

Crie o arquivo `.env` a partir do exemplo:

```bash
copy .env.example .env
```

No arquivo `.env`, configure a conexão com o PostgreSQL. Exemplo:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/login-auth-jwt"
JWT_SECRET=uma-chave-secreta
PORT=3000
CORS_ORIGIN=http://localhost:5173
```

Execute os scripts SQL disponíveis em `backend/sql` no banco configurado para criar as tabelas e inserir os dados iniciais.

Inicie o backend:

```bash
npm run dev
```

O backend ficará disponível em `http://localhost:3000`.

## Configuração do frontend

Abra outro terminal na raiz do projeto e entre na pasta do frontend:

```bash
cd frontend
npm install
npm run dev
```

O frontend ficará disponível em `http://localhost:5173`.

## Acesso ao sistema

Com o backend e o frontend executando em terminais separados, abra no navegador:

```text
http://localhost:5173
```

Use um usuário cadastrado no banco de dados para realizar o login.

## Estrutura do projeto

```text
backend/   API REST, autenticação JWT e integração com PostgreSQL
frontend/  Interface React.js e telas de login e dashboard
img/       Imagens de demonstração do sistema
```
