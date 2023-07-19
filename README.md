# Airel's Chatbot

Este é um chatbot web que permite interagir com os usuários e oferece recursos como solicitar empréstimos, exibir condições de empréstimo e fornecer ajuda. A aplicação é desenvolvida em React, estilizada com Tailwind e totalmente responsiva.

Um adendo importante é que a aplicação conta com um backend em Node.js, que ainda não está totalente funcional, de forma que não foi integrado ao frontend. Entretanto, é possível acessar o código desse backend no diretório `chatbot-api`, deste mesmo repositório.

Esse é um projeto em contrução e, por isso, é possível subir as duas partes, junto ao banco de dados MySQL da aplicação em Docker, seguindo os comandos do último item deste ReadME. Seja bem vinde a clonar, mexer e se divertir com o código!

## Funcionalidades

- Interpretar termos como "Olá", "Adeus", "Bom dia", em inglês e em português,
- Capaz de manter conversas curtas sobre temas variados.
- Exige um nome de usuário e senha para continuar a conversa.
- Apresenta opções relacionadas a empréstimos ao encontrar o termo "empréstimo".
- Indica informações relevantes com links para referência.
- Finaliza e armazena a conversa quando o usuário usar o termo "Adeus" ou sinônimos.
- Permite à pessoa usuária salvar a conversa em CSV.

## Como usar

### Pré-requisitos

- Node.js instalado na máquina.

### Clonando o repositório

```
git clone git@github.com:AirelRibeiro/chatbot.git
cd chatbot/chatbot-app
```

### Instalando dependências

```
npm install
```

### Executando a aplicação

```
npm start
```

A aplicação será executada localmente em [http://localhost:3000](http://localhost:3000).

### Salvando as conversas

- Acesse a página da aplicação.
- Clique em "Vamos conversar"
- Interaja com o chatbot e tenha conversas.
- Na página do chatbot, clique no botão "Salvar Conversa" para baixar um arquivo CSV contendo seu histórico de conversa.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
