# 🧪 Projeto BDD - EBAC

Projeto desenvolvido durante os estudos de **Qualidade de Software (QA)** na EBAC, com foco na aplicação de **BDD (Behavior Driven Development)** utilizando Cypress, Cucumber e Gherkin.

## 📚 Projeto utilizado

Os testes foram implementados sobre a aplicação **Hub de Leitura Integrado**, utilizada como ambiente para prática de testes automatizados.

## 🎯 Objetivo

O objetivo deste projeto é praticar a criação e automação de cenários de teste utilizando BDD.

Foram desenvolvidos cenários para validar o fluxo de login da aplicação, incluindo:

- Login com credenciais válidas;
- Login com credenciais inválidas;
- Validação do acesso ao painel administrativo;
- Validação da mensagem de erro para credenciais incorretas.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress
- Cucumber
- Gherkin
- `@badeball/cypress-cucumber-preprocessor`
- `@bahmutov/cypress-esbuild-preprocessor`

## 🥒 Estrutura BDD

Os cenários são escritos utilizando a sintaxe Gherkin:

- **Given (Dado):** define a pré-condição do teste;
- **When (Quando):** representa a ação realizada;
- **Then (Então):** representa o resultado esperado.

Exemplo:

```gherkin
Cenário: Login com credenciais válidas
  Dado que estou na página de login
  Quando informo credenciais válidas de administrador
  E clico no botão entrar
  Então devo visualizar o painel administrativo
```

## 📂 Estrutura dos testes

```text
hub-de-leitura-integrado/
├── cypress/
│   ├── e2e/
│   │   ├── login.feature
│   │   └── login/
│   │       └── login.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
└── package-lock.json
```

O arquivo `login.feature` contém os cenários escritos em Gherkin.

O arquivo `login.js` contém as implementações dos passos executados pelo Cypress.

## ▶️ Como executar

Entre na pasta do projeto:

```bash
cd hub-de-leitura-integrado
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

Em outro terminal, execute:

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha o navegador e execute o arquivo `login.feature`.

## ✅ Cenários implementados

### Login com credenciais válidas

Valida se o administrador consegue realizar login com credenciais válidas e acessar o painel administrativo.

### Login com credenciais inválidas

Valida se o sistema apresenta a mensagem esperada quando são informadas credenciais inválidas.

## 👩‍💻 Academica:

**Jaqueline Andrade Rosa**

Projeto desenvolvido para estudos e prática de **Quality Assurance (QA)**. Ebac
