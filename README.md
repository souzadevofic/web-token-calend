# Calendário de Eventos 
![Versão](https://img.shields.io/badge/Vers%C3%A3o-1.0_-blue)
![React](https://img.shields.io/badge/React-16.13.1-%2320232a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-%F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-v18.18.0-green)
![npm](https://img.shields.io/badge/npm-v9.8.1-red)

## Descrição do Projeto  

Web Token Calend é uma aplicação web que permite que usuários em empresas corporativas marquem eventos internos e comuniquem com os mesmos.

# Front-end:

## As Tecnologias utilizadas

- **Javascript**: linguagem de programação.

- **React**: biblioteca para construção de interfaces de usuário.

- **Bootstrap**:  framework de código aberto e gratuito para desenvolvimento web para trabalhar com responosividade.

## Rodando o projeto

### 1. Para iniciar o projeto é necessário configurar o package.json em cada pasta que está o front-end e o back-end.

1.1 Para isso é necessário entrar nas pastas por meio do cd. Ex:

```
cd front-end;
cd back-end;
```

1.2 Depois de ter entrado nas pastas, dê o comando do npm em cada pasta. Ex:

```
back-end: \web-token-calend\back-end> npm i
front-end: \web-token-calend\front-end> npm i
```

1.3 Pronto, todos o packges dentro de cada pasta estão baixados. Agora dê os seguintes comandos para rodar o projeto no lado cliente e servidor. Ex:

```
back-end: \web-token-calend\back-end> node app.js
front-end: \web-token-calend\front-end> npm run dev
```

### 2. Visualizando a Interface

2.1 Quando abrir o link na pasta do front-end depois de ter digitado "npm run dev" é necessário fazer o seguinte comando na url do navegador para navegar na interface de login:

```
http://localhost:5173/login
```
### Estrura da pasta front-end:

```
📂 front-end/
├── 📂 asserts/
│   └── token-logo-dark.svg
│
├── 📂 public/
│   ├── festa-fim-de-ano.png
│   ├── hamburguer.png
│   ├── logo-token-white.png
│   ├── reuniao-brainstorming.jpeg
│   ├── reuniao-da-qualidade.jng
│   ├── sesc-sumit.jpg
│   └── traco.png
│
├── 📂 services/
│   └── api.js
│
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 ButtonCard/
│   │   │   ├── ButtonCard.css
│   │   │   └── ButtonCard.jsx
│   │   │
│   │   ├── 📂 CadUser/
│   │   │   ├── CadUser.css
│   │   │   └── CadUser.jsx
│   │   │
│   │   ├── 📂 CardTarefas/
│   │   │   ├── CardTarefas.css
│   │   │   └── CardTarefas.jsx
│   │   │
│   │   ├── 📂 EventForm/
│   │   │   ├── EventForm.css
│   │   │   └── EventForm.jsx
│   │   │
│   │   ├── 📂 Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── 📂 Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   │
│   │   ├── 📂 HeaderInicio/
│   │   │   ├── HeaderInicio.css
│   │   │   └── HeaderInicio.jsx
│   │   │
│   │   ├── 📂 Logo/
│   │   │   ├── Logo.css
│   │   │   └── Logo.jsx
│   │   │
│   │   ├── 📂 Modal/
│   │   │   ├── Modal.css
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── 📂 PrivateRoute/
│   │   │   ├── PrivateRoute.css
│   │   │   └── PrivateRoute.jsx
│   │   │
│   │   ├── 📂 Section/
│   │   │   ├── Section.css
│   │   │   └── Section.jsx
│   │   │
│   │   ├── 📂 SectionCard/
│   │   │   ├── SectionCard.css
│   │   │   └── SectionCard.jsx
│   │   │
│   │   ├── 📂 SectionLogin/
│   │   │   ├── SectionLogin.css
│   │   │   └── SectionLogin.jsx
│   │   │
│   │   └── 📂 SizeButtonShoes/
│   │       ├── SizeButtonShoes.css
│   │       └── SizeButtonShoes.jsx
│   │
│   ├── 📂 pages/
│   │   ├── 📂 CreateAccount/
│   │   │   └── CreateAccount.jsx
│   │   │
│   │   ├── 📂 HomePage/
│   │   │   └── HomePage.jsx
│   │   │
│   │   ├── 📂 Layout/
│   │   │   └── Layout.jsx
│   │   │
│   │   └── 📂 Login/
│   │       └── Login.jsx
│   │
│   ├── 📂 routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

```
# Back-end:

API Rest em que podemos Criar, Ler, Atualizar e Deletar (CRUD). 

## As Tecnologias utilizadas

- **Node.js**: fornece a possibilidade de executar JS em um servidor.

- **Express.js**: cria rotas de api

- **Dotenv**: cria configurações com mais facilidade e segurança.

- **Nodemon**: configura o nosso ambiente de desenvolvimento.

- **MySQL**: Armazenamento dos dados.

- **Sequelize**: configura a interação com o mysql para a criação das estruturas de: Banco de Dados, Tabelas e Inserções de Valores.

- **JWT**: Token gerado para fins de segurança das rotas das APIs.

- **Swagger**: Faz o design, ou seja, fazer a modelagem, a documentar e até gerar código para desenvolvimento de APIs.

### Estrura da pasta back-end:
```
📂 back-end/
├── 📂 config/
├── 📂 controllers/
├── 📂 middleware/
├── 📂 models/
├── 📂 routes/
├── 📂 scripts/
│
├── .env
├── .gitignore
├── app.js
├── association.js
└── server.js


```

## Criador do Projeto

|                                               Profile                                                |       Nome Completo        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------------------------------------: | :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     [<img src="https://avatars.githubusercontent.com/u/146147231?v=4" height="90px">](https://github.com/souzadevofic)     |   Alisson Silva de Souza       |                                                                                                       