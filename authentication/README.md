## Projeto em NodeJS sobre Segurança e Autenticação 🛡️🔐
### 1. **Autenticação 🔒**
- a autenticação é um aspecto crucial de aplicações web para controlar o acesso e as interações.
- a autenticação restringe o acesso, garantindo que nem todo visitante possa visualizar e interagir com tudo;
- a implementação ocorre no lado do servidor e depende de sessões;
- rotas são protegidas verificando o status de login controlado pela sessão antes de acessar uma ação do controlador;

---
### 2. **Segurança e Experiência do Usuário 🛡️**
- assegurar tanto a segurança quanto uma experiência positiva para o usuário é vital para qualquer aplicação;
- senhas devem ser armazenadas de forma segura em formato hash;
- o jeito de se proteger contra ataques CSRF é implementando proteção CSRF na aplicação;
- melhorar a experiência do usuário ao inserir dados/mensagens na sessão para exibir em visualizações;

---
### 3. **Bcryptjs 🔐**
- aprendi a criptografar senhas usando a biblioteca bcryptjs, uma implementação em JavaScript do algoritmo de hash de senha bcrypt. O bcrypt é projetado para proteger contra ataques de força bruta.
- exemplo básico de como usar o bcryptjs para criar um hash de senha:
~~~javascript 
const bcrypt = require('bcryptjs');

const senhaPlana = 'senha123';
const custoHash = 12;

bcrypt.hash(senhaPlana, custoHash, (err, hash) => {
  if (err) {
    console.error('Erro ao criar hash:', err);
    return;
  }
  console.log('Hash da senha:', hash);
});

~~~
---

### 4. **Csurf 🛑**
- Para proteger o seu site e evitar ataques CSRF, uma alternativa é usar o csurf, um middleware para Express.js.
![image](https://github.com/htamagnus/nodejs-apis/assets/85269068/132bb9a8-0fd6-4a1a-9973-407674eb91e0)
- exemplo de uso:
~~~javascript
const express = require('express');
const csurf = require('csurf');

const app = express();

// Configuração do csurf
const csrfProtection = csurf();
app.use(csrfProtection);

// Rota protegida pelo csurf
app.post('/rota-protegida', (req, res) => {
  res.send('Rota protegida pelo csurf!');
});
~~~

---
### 5. **Connect-flash 🚨**
- o connect-flash é um middleware para o framework Express.js em Node.js. Sua principal finalidade é permitir que mensagens temporárias sejam armazenadas e exibidas em páginas subsequentes.
- exemplo de uso:
- ~~~javascript
  app.post('/exemplo-rota', (req, res) => {
  // Realiza alguma lógica
  if (algumaCondição) {
    req.flash('sucesso', 'Operação bem-sucedida!');
  } else {
    req.flash('erro', 'Algo deu errado.');
  }
  res.redirect('/pagina-seguinte');
  });
~~~
