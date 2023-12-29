# Projeto Express.js 🚀
O Express.js é um framework para Node.js que simplifica o desenvolvimento de aplicativos web. Ele fornece uma variedade de recursos para construir servidores web robustos e eficientes.

# Tópicos:
1. [O que é o Express.js?](#o-que-é-o-expressjs)
2. [Usando Middleware](#usando-middleware)
3. [Manipulação de Solicitações e Respostas](#manipulação-de-solicitações-e-respostas)
4. [Roteamento](#roteamento)
5. [Retornando Páginas HTML (Arquivos)](#retornando-páginas-html-arquivos)

## O que é o Express.js? 🌐
Express.js é um framework web minimalista para Node.js que facilita a criação de aplicativos web e APIs. Ele fornece uma abstração sobre o manuseio de HTTP e simplifica tarefas comuns, como roteamento, manipulação de solicitações e respostas, além de facilitar a integração com middleware.

## Usando Middleware 🚥
Middleware são funções que têm acesso ao objeto de solicitação (request), ao objeto de resposta (response) e à próxima função de middleware no ciclo de solicitação-resposta do Express. Eles desempenham um papel fundamental no processamento de solicitações antes que elas atinjam as rotas finais.

```javascript
// Exemplo de middleware que loga as solicitações
const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logMiddleware); // Aplicando o middleware a todas as rotas
```
## Manipulação de Solicitações e Respostas 🔄

O Express simplifica a manipulação de solicitações e respostas HTTP. Abaixo está um exemplo básico de como lidar com uma solicitação e enviar uma resposta:

```javascript
// Exemplo de rota para "hello"
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
```

## Roteamento 🛣️
O roteamento no Express permite definir como a aplicação responde a uma solicitação a uma determinada URL.
```javascript
// Rota padrão
app.get('/', (req, res) => {
  res.send('Página inicial');
});

// Rota para "/about"
app.get('/about', (req, res) => {
  res.send('Sobre nós');
});
```

## Retornando Páginas HTML (Arquivos) 🖥️
O Express facilita a renderização de páginas HTML a partir de arquivos. Para isso, geralmente utiliza-se um mecanismo de visualização (view engine) como o EJS ou Handlebars. Abaixo está um exemplo usando EJS:
```javascript
// Configuração do mecanismo de visualização
app.set('view engine', 'ejs');

// Rota para renderizar uma página HTML
app.get('/page', (req, res) => {
  res.render('page'); // Renderiza "page.ejs" na pasta de visualizações
});
```
