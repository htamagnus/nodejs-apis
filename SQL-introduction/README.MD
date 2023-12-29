# Projeto em NodeJS e SQL 🚀
O projeto abordou diversos tópicos relacionados ao uso de bancos de dados, especialmente SQL, em conjunto com o desenvolvimento de uma aplicação Node.js. Abaixo estão os principais aprendizados:

## 1. Introdução aos Bancos de Dados: SQL vs NoSQL 🗃️:
O projeto iniciou com uma introdução aos diferentes tipos de bancos de dados, destacando as principais características e diferenças entre SQL e NoSQL. Compreender essas distinções é crucial para escolher a melhor solução de armazenamento de dados para cada aplicação.
#### SQL (Bancos de Dados Relacionais):
- Modelo de dados relacional baseado em tabelas.
- Esquema de dados fixo e estrutura pré-definida.
- Utiliza a linguagem SQL para consultas e manipulação de dados.
- Segue o princípio ACID (Atomicidade, Consistência, Isolamento, Durabilidade).
- Escala verticalmente, adicionando mais recursos a um único servidor.
- Melhor para aplicações com esquema definido e dados bem estruturados.

#### NoSQL (Bancos de Dados Não Relacionais):
- Suporta modelos de dados flexíveis, como documentos, chave-valor, coluna larga e grafos.
- Esquema dinâmico, permitindo a adição de campos sem alterar um esquema central.
- Não utiliza uma linguagem única padrão (cada banco NoSQL tem sua própria API).
- Segue o princípio BASE (Basicamente Disponível, Soft State, Eventual Consistency).
- Escala horizontalmente, adicionando mais servidores conforme necessário.
- Melhor para aplicações com dados não estruturados ou semiestruturados, como redes sociais e big data.

---

## 2. Utilizando SQL em uma Aplicação Node.js 🚀:

Foram exploradas as práticas e técnicas para integrar um banco de dados SQL a uma aplicação Node.js. Isso inclui a escolha de bibliotecas e métodos específicos para realizar operações CRUD no banco de dados.

---

## 3. Configurando MySQL 🛠️:

A configuração do MySQL foi abordada, incluindo a instalação e a configuração inicial do banco de dados. Compreender o processo de configuração é fundamental para estabelecer uma conexão bem-sucedida entre a aplicação Node.js e o MySQL.

---

## 4. Conectando a Aplicação ao Banco de Dados SQL 🌐:

Foram discutidos os passos para estabelecer uma conexão efetiva entre a aplicação Node.js e o banco de dados MySQL. Isso inclui a configuração das credenciais de acesso e a utilização de bibliotecas especializadas para facilitar a comunicação.
~~~javascript
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'nome_do_banco',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados.');
});
~~~

## 5. Criando uma Tabela no Banco de Dados 📊:
A criação de uma tabela no banco de dados MySQL foi explorada, mostrando como definir a estrutura da tabela e configurar as chaves primárias e estrangeiras quando necessário.
~~~javascript
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  preco DECIMAL(10, 2),
  descricao TEXT
);
~~~

## 6. Recuperando Produtos do Banco de Dados 🔄:
A aplicação foi configurada para recuperar dados do banco de dados, permitindo a leitura de informações sobre produtos previamente armazenados.
~~~javascript
const getProducts = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM produtos';
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};
~~~

## 7. Inserindo Dados no Banco de Dados 📥:
Foi abordado o processo de inserção de novos dados no banco de dados MySQL, permitindo que a aplicação Node.js adicione produtos à tabela.
~~~javascript
const insertProduct = (product) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO produtos SET ?';
    connection.query(query, product, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};
~~~

---
Estes são os principais aprendizados obtidos durante o desenvolvimento deste projeto, que explorou a integração entre uma aplicação Node.js e um banco de dados SQL, especificamente o MySQL.
---
![image](https://github.com/htamagnus/Node-JS/assets/85269068/f5423f2d-e42e-4c7d-a708-b6662f168eef)
https://expeed.com/wp-content/uploads/2022/11/SQL-Vs-NoSQL-Data-Structures-infographics.jpg
---
