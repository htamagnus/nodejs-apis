# Projeto Understanding Basics Node.js 🚀

![image](https://github.com/htamagnus/nodejs-apis/assets/85269068/e8081c38-0e19-4c65-9ee7-32b1c4667387)


O projeto "Understanding Basics Node.js" tem como objetivo explorar os fundamentos essenciais do Node.js, proporcionando uma compreensão abrangente de como o Node.js funciona e como utilizar seus conceitos básicos. Abaixo estão os principais tópicos abordados no projeto:

## Tópicos:
1. [Como a Web Funciona](#1-como-a-web-funciona)
2. [Criando um Servidor Node.js](#2-criando-um-servidor-node.js)
3. [Utilizando Módulos Core do Node.js](#3-utilizando-módulos-core-do-node.js)
4. [Trabalhando com Solicitações e Respostas (Básico)](#4-trabalhando-com-solicitações-e-respostas-(básico))
5. [Código Assíncrono e o Event Loop](#5-código-assíncrono-e-o-event-loop)
6. [Desenvolvimento Eficiente](#6-desenvolvimento-eficiente)

---

## 1. Como a Web Funciona 🌐:

Este tópico explora os fundamentos de como a web opera, desde a comunicação entre clientes e servidores até a entrega de conteúdo aos usuários.

---

## 2. Criando um Servidor Node.js 🖥️:

A criação de um servidor é uma parte fundamental do desenvolvimento com Node.js. Este tópico aborda como configurar e criar um servidor usando Node.js, destacando os passos essenciais para disponibilizar aplicativos na web.

~~~javascript
const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);
server.listen(3000);
~~~

---

## 3. Utilizando Módulos Core do Node.js 📦:

Os módulos core do Node.js fornecem funcionalidades essenciais para o desenvolvimento de aplicativos. São módulos que fazem parte da instalação padrão do Node.js e não requerem instalação adicional.

#### HTTP
- Permite criar servidores HTTP e fazer requisições;
~~~javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on port 3000');
});
~~~

---

#### fs (File System)
- Fornece funcionalidades para interagir com o sistema de arquivos;
~~~javascript
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
~~~

---

#### Path
- Manipula caminhos de arquivos e diretórios;
~~~javascript
const path = require('path');

const fullPath = path.join(__dirname, 'arquivos', 'documento.txt');
console.log(fullPath);
~~~
---

#### Events
- Fornece uma maneira de emitir e escutar eventos;
~~~javascript
const EventEmitter = require('events');

class MeuEmitter extends EventEmitter {}

const meuEmitter = new MeuEmitter();
meuEmitter.on('evento', () => {
  console.log('Evento disparado!');
});

meuEmitter.emit('evento');
~~~

---

## 4. Trabalhando com Solicitações e Respostas (Básico) 🔄:

A manipulação de solicitações e respostas é central em qualquer aplicativo web. Neste tópico, examinaremos os conceitos básicos de como lidar com solicitações e gerar respostas em aplicativos Node.js. Exemplo de código:

~~~javascript
const http = require('http');

// Criação do servidor
const server = http.createServer((req, res) => {
  // Configuração do cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Escrever o corpo da resposta
  res.write('Olá, Mundo!\n');

  // Finaliza a resposta
  res.end();
});

// Configuração do servidor para escutar na porta 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor ouvindo na porta 3000');
});
~~~

---

## 5. Código Assíncrono e o Event Loop ⏭️:

O Node.js é conhecido por sua capacidade de trabalhar com código assíncrono e o conceito de event loop.

~~~javascript
const fs = require('fs');

console.log('Início da leitura do arquivo...');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', data);
});

console.log('Leitura do arquivo em andamento...');
~~~

---

## 6. Desenvolvimento Eficiente 🚀:

Desenvolver de forma eficiente é crucial para criar aplicativos Node.js bem-sucedidos. Aprendi práticas e técnicas que visam aprimorar a produtividade durante o desenvolvimento, garantindo a eficiência no ciclo de vida do projeto.

---

**Estes são os principais tópicos abordados no projeto "Understanding Basics Node.js", oferecendo uma base sólida para compreender os fundamentos do Node.js e criar aplicativos eficientes.**
