# Elosun Manager

Este projeto faz o CRUD dos dados no elosun para um usuário interno

> Este projeto foi criado utilizando o [Create React App](https://github.com/facebook/create-react-app).

### Pré-requisitos

- Node 8+
- [npm](https://www.npmjs.com/get-npm)
- yarn
    - Execute `npm i -g yarn` para instalar

### Rodando localmente

Execute na linha de comando:

1. `yarn install` (ou `npm install`)
2. `yarn start` (ou `npm run start`)

### Mexendo com variáveis de ambiente

Os ambientes que existem junto com os arquivos com as variáveis:

**TODAS as variáveios de ambiente precisam começar com *REACT_APP_***

|Ambiente   |Arquivo de variáveis|Comando para executar um ambiente|
|:---------:|:-------------------|:--------------------------------|
|development|`.env.development`  |`npm run start`                  |
|production |`.env.production`   |`npm run build`                  |
|test       |`.env.test`         |`npm run test`                   |

### Autenticação das rotas

Para bloquear as rotas, for utilizado o componente `AuthRoute` localizado em './src/utils/auth.tsx'.

Ele faz o seguinte:

1. Carrega uma tag `Route` do `react-router-dom`
2. Verifica se existe autenticação. (demais regra de negócio de autenticação das rotas devem ser colocadas lá também)
3. *Se ele passar* na autenticação, reinderiza a página.
4. *Se ele não passar* na autenticação, redireciona para página de login

No arquivo `App.tsx` localizado em './src/pages/App.tsx'.

1. Quando o usuário entra no site sem estar autenticado, ele carrega apenas a tela de login
2. Quando o usuário se autentica, é carregado o arquivo `MainPage`, que carrega as rotas e cabeçalhos
