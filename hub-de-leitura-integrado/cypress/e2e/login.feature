# language: pt

Funcionalidade: Login no Hub de Leitura

Como administrador do Hub de Leitura
Quero realizar login no sistema
Para acessar o painel administrativo

Cenário: Login com credenciais válidas
Dado que estou na página de login
Quando informo credenciais válidas de administrador
E clico no botão entrar
Então devo visualizar o painel administrativo

Cenário: Login com credenciais inválidas
Dado que estou na página de login
Quando informo credenciais inválidas
E clico no botão entrar
Então devo visualizar a mensagem "Email ou senha incorretos."