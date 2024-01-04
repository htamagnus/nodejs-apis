# Projeto Sequelize Node 🚀

O projeto "Sequelize Node" tem como objetivo explorar o uso da biblioteca Sequelize em conjunto com o Node.js para interação com bancos de dados relacionais. A seguir, são abordados os principais tópicos do projeto:

## Tópicos:
1. [O que é o Sequelize](#1-o-que-é-o-sequelize)
2. [Conectando-se ao Banco de Dados](#2-conectando-se-ao-banco-de-dados)
3. [Abstração de Consultas SQL com Sequelize](#3-abstração-de-consultas-sql-com-sequelize)
4. [Definindo Modelos no Sequelize](#4-definindo-modelos-no-sequelize)
5. [Estabelecendo Relações entre Modelos](#5-estabelecendo-relações-entre-modelos)

---

## 1. O que é o Sequelize ❓:

O Sequelize é um ORM (Object-Relational Mapping) para Node.js, que facilita a interação com bancos de dados relacionais como o MySQL, PostgreSQL e SQLite. Ele permite que as consultas SQL sejam abstraídas para operações em objetos JavaScript.

---

## 2. Conectando-se ao Banco de Dados 🗃️:

Nesta parte do projeto, são abordados os passos para conectar o aplicativo Node.js ao banco de dados utilizando o Sequelize. A configuração da conexão e as melhores práticas para estabelecer uma conexão segura são discutidas.

~~~javascript
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
~~~

---

## 3. Abstração de Consultas SQL com Sequelize 🔄:

Em vez de escrever consultas SQL manualmente, o Sequelize oferece uma maneira mais eficiente de realizar operações no banco de dados, permitindo que o foco seja no código Node.js e na manipulação de objetos nativos em JavaScript.
~~~javascript
// Sincronizando o modelo com o banco de dados (cria a tabela se não existir)
sequelize.sync()
  .then(() => {
    // Criando um novo usuário usando Sequelize
    return User.create({
      firstName: 'John',
      lastName: 'Doe',
    });
  })
  .then((user) => {
    console.log('Usuário criado:', user.toJSON());
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
~~~

---

## 4. Definindo Modelos no Sequelize 📋:

A criação de modelos no Sequelize é fundamental para representar as entidades do banco de dados como objetos JavaScript. Este tópico explora como definir modelos no Sequelize, incluindo a especificação de campos, tipos de dados e opções.
~~~javascript
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
~~~

---

## 5. Estabelecendo Relações entre Modelos 🔗:

A capacidade de estabelecer relações entre modelos é uma característica poderosa do Sequelize. Este tópico explora como definir e trabalhar com relações entre modelos, proporcionando uma compreensão abrangente de como organizar e acessar dados relacionais.
~~~javascript
const { Sequelize, DataTypes } = require('sequelize');

// Configuração do Sequelize para SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Definindo o modelo 'User'
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definindo o modelo 'Post'
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Estabelecendo a relação 'um para muitos' entre User e Post
User.hasMany(Post);
Post.belongsTo(User);

// Sincronizando os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    // Criando um usuário com alguns posts associados
    return User.create({
      username: 'john_doe',
      posts: [
        { title: 'Post 1', content: 'Conteúdo do Post 1' },
        { title: 'Post 2', content: 'Conteúdo do Post 2' },
      ],
    }, {
      include: [Post], // Especificando que queremos incluir os posts associados ao criar o usuário
    });
  })
  .then((user) => {
    console.log('Usuário e Posts criados:', user.toJSON());
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
~~~

---

*Estes são os principais tópicos abordados no projeto "Sequelize Node", proporcionando uma visão prática de como utilizar o Sequelize para interação eficiente com bancos de dados relacionais no ambiente Node.js.*
