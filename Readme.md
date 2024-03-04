# Aplicação de Exemplo Node.js com RabbitMQ

Esta é uma aplicação muito simples criada com Node.js e RabbitMQ para demonstrar como trabalhar com serviços de mensageria utilizando essas tecnologias.

## Requisitos

- Node.js instalado na sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
- RabbitMQ instalado e em execução. Você pode encontrar instruções de instalação [aqui](https://www.rabbitmq.com/download.html).

## Instalação

1. Clone este repositório para o seu ambiente local:

    `git clone https://github.com/oliverigor27/RabbitMQ_Aula.git `


2. Na raiz do projeto, instale as dependências do Node.js executando:

    - npm install


## Configuração

Certifique-se de configurar corretamente o RabbitMQ antes de iniciar a aplicação. Você pode alterar as configurações de conexão com o RabbitMQ no arquivo `config.js`.

## Utilização

1. Para iniciar o consumidor (subscriber) da fila RabbitMQ, entre na pasta 'Consumer' e execute:

    `node consumer.js`


2. Para iniciar o produtor (publisher) da fila RabbitMQ, entre na pasta 'publisher' e execute:

    `node producer.js`


## Estrutura do Projeto

Aqui está a estrutura básica do projeto:


```
├── README.md
├── Consumer
│   └── consumer.js
└── Publisher
    └── publisher.js
```

- **README.md**: Este arquivo.
- **Consumer/consumer.js**: Arquivo contendo a lógica para consumir mensagens da fila RabbitMQ.
- **Publisher/publisher.js**: Arquivo contendo a lógica para enviar mensagens para a fila RabbitMQ.


