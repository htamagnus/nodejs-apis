## Rotas e Modelos avançados em NodeJS 🚀
O projeto explora técnicas avançadas relacionadas ao gerenciamento de rotas e modelos em uma aplicação Node.js. Abaixo estão os principais tópicos abordados:

## 1. Passando Parâmetros de Rota 🛤️:

A primeira parte do projeto abordou a técnica de passar parâmetros através das rotas. Isso envolve a configuração e manipulação de parâmetros dinâmicos na URL, permitindo a criação de rotas flexíveis e personalizadas.

~~~javascript
const express = require('express');
const app = express();
const port = 3000;

// Rota com parâmetro
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Detalhes do usuário com ID ${userId}`);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
~~~

---

## 2. Utilizando Parâmetros de Consulta (Query Params) 📝:

A segunda parte explorou o uso de parâmetros de consulta, também conhecidos como query params. Esses parâmetros são adicionados às URLs e oferecem uma maneira de fornecer informações extras para uma rota. O projeto demonstrou como acessar e utilizar esses parâmetros em uma aplicação Node.js.

~~~javascript
const express = require('express');
const app = express();
const port = 3000;

// Rota com parâmetros de consulta
app.get('/search', (req, res) => {
  const queryParam = req.query.q;
  res.send(`Resultados de pesquisa para: ${queryParam}`);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
~~~

---

## 3. Aprimorando Nossos Modelos 🔄:

A última parte focou em aprimorar os modelos utilizados na aplicação. Isso envolveu a implementação de melhorias nos modelos de dados, incluindo validações avançadas, relacionamentos entre modelos e a utilização de recursos adicionais oferecidos pelo Mongoose.

---
