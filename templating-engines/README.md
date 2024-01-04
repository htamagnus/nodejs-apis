# Projeto Template Engines 🚀

O projeto "Template Engines" visa explorar o uso de engines de template, como EJS, Pug e Express Handlebars, para gerenciar dados e renderizar conteúdo dinâmico nas visualizações de uma aplicação Node.js. A seguir, são abordados os principais tópicos do projeto:

## Tópicos:
1. [Gerenciamento de Dados sem um Banco de Dados](#1-gerenciamento-de-dados-sem-um-banco-de-dados)
2. [Renderização de Conteúdo Dinâmico em Visualizações](#2-renderização-de-conteúdo-dinâmico-em-visualizações)
3. [Compreensão de Engines de Template](#3-compreensão-de-engines-de-template)
4. [EJS - Embedded JavaScript](#4-ejs-embedded-javascript)
5. [Pug - Template Engine Simplificada](#5-pug-template-engine-simplificada)
6. [Express Handlebars - Integração com o Express](#6-express-handlebars-integração-com-o-express)

---

## 1. Gerenciamento de Dados sem um Banco de Dados 📄:

Nesta seção, são exploradas estratégias para gerenciar dados em uma aplicação sem a necessidade de um banco de dados. Como manipular e utilizar dados diretamente no código, proporcionando uma compreensão do armazenamento temporário de informações.

---

## 2. Renderização de Conteúdo Dinâmico em Visualizações 🔄:

A renderização de conteúdo dinâmico é essencial para apresentar informações atualizadas aos usuários. Como implementar a renderização dinâmica em visualizações usando diferentes engines de template.

---

## 3. Compreensão de Engines de Template 📝:

Engines de template desempenham um papel crucial na geração de HTML dinâmico em aplicativos Node.js. Foi entendido o conceito por trás dessas engines e como elas facilitam a incorporação de lógica de programação nas visualizações.

---

## 4. EJS - Embedded JavaScript 🚀:

EJS é uma engine de template que utiliza JavaScript incorporado em arquivos de modelo para gerar HTML dinâmico. Como configurar e utilizar o EJS em um projeto Node.js, destacando suas principais características.
~~~javascript
app.set("view engine", "ejs");
~~~
---

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%= pageTitle %></title>
    <link rel="stylesheet" href="/css/main.css">
```

---

## 5. Pug - Template Engine Simplificada 🌀:

Pug, anteriormente conhecido como Jade, é uma engine de template que oferece uma sintaxe simplificada para a criação de modelos. Este tópico aborda a configuração e o uso do Pug, destacando suas peculiaridades e vantagens.
~~~javascript
// Configurando o template engine Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
~~~

---

```pug
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title My Shop
    body 
    header.main-header 
        nav.main-header__nav 
            ul.main-header__item-list 
                li.main-header__item 
                    a.main-header__item(href="/") Shop
                li.main-header__item 
                    a.main-header__item(href="/admin/add-product") Add Product
```

---

## 6. Express Handlebars - Integração com o Express 🤝:

Express Handlebars é uma engine de template que se integra perfeitamente ao framework Express. Foi entendido como configurar e utilizar o Express Handlebars para renderização de visualizações em um aplicativo Node.js, explorando suas funcionalidades específicas.
~~~javascript
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", "views");
~~~
---
```hbs
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ pageTitle }}</title>
    <link rel="stylesheet" href="/css/main.css">
</head>

<body>
    <header class="main-header">
        <nav class="main-header__nav">
            <ul class="main-header__item-list">
                <li class="main-header__item"><a href="/">Shop</a></li>
                <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
            </ul>
        </nav>
    </header>
    <h1>Page Not Found!</h1>
</body>

</html>
```

---

Estes são os principais tópicos abordados no projeto "Template Engines", oferecendo uma visão abrangente sobre o gerenciamento de dados e a renderização dinâmica em aplicações Node.js, utilizando diversas engines de template.
