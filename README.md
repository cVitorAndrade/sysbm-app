# 📚 SYSBM

Bem-vindo ao **SysBM, sistema  de gerenciamento de empréstimo e acervo da Biblioteca Municipal de Milhã**

## 🛠️ Tecnologias Utilizadas

- **Front-end**: Electron.js com React e TypeScript
- **Back-end**: NestJS, Prisma ORM e TypeScript
- **Banco de Dados**: SQLite
- **Ferramentas de apoio**: ESLint e Prettier

---

## 🚀 Funcionalidades Principais

- Cadastro e Gerenciamento de empréstimos.
- Cadastro e edição de livros, leitores e estantes.
- Controle do acervo digital.
- Gerar relatório.

---

## 🧰 Configuração do Projeto

### Pré-requisitos

Certifique-se de que as ferramentas abaixo estão instaladas no seu ambiente:
- [Node.js e Npm](https://nodejs.org/)

---

## 📦 Como Executar o Back-end com 

Com o repositório já clonado, deve-se entrar na pasta do backend, usando o comando:

    - "cd backend"

Instale as dependências do projeto, usando o comando:

    - "npm install"

Gere os arquivos do Prisma, usando o comando:

    - "npx prisma generate"

Caso necessário, aplique as migrações do banco de dados, usando o comando:

    - "npx prisma migrate dev --name init"

Por fim, inicie o servidor em modo de desenvolvimento, usando o comando:

     - "npx prisma migrate dev --name init"
---

## 🖥️ Como Executar o Front-end

Entre na pasta do front-end, usando o comando:

    - "cd frontend"

Instale as dependências do Front-end, usando o comando:

    - "npm install"

Por fim, execute o ambiente de desenvolvimento, usando o comando:

    - "npm run build"

  Por fim, execute, usando o comando:

    - "npm start"

---
