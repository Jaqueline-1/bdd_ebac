const {
  Given, //Given = Dado → define a pré-condição do teste.
  When, //
  Then, //
} = require("@badeball/cypress-cucumber-preprocessor");

// GIVEN

Given("que estou na página de login", () => {
  cy.visit("http://localhost:3000/login.html");
});

// WHEN - LOGIN VÁLIDO

When("informo credenciais válidas de administrador", () => {
  cy.get('input[type="email"]').clear().type("admin@biblioteca.com");

  cy.get('input[type="password"]').clear().type("admin123");
});

// WHEN - LOGIN INVÁLIDO

When("informo credenciais inválidas", () => {
  cy.get('input[type="email"]').clear().type("usuario@invalido.com");

  cy.get('input[type="password"]').clear().type("senhaerrada");
});

// WHEN - BOTÃO ENTRAR

When("clico no botão entrar", () => {
  cy.contains("button", "Entrar").should("be.visible").click();
});

// THEN - LOGIN VÁLIDO

Then("devo visualizar o painel administrativo", () => {
  cy.url().should("include", "admin");
});

// THEN - LOGIN INVÁLIDO

Then('devo visualizar a mensagem "Email ou senha incorretos."', () => {
  cy.contains("Email ou senha incorretos.").should("be.visible");
});
