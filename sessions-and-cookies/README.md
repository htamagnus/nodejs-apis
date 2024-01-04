# Projeto em NodeJS sobre Sessões e Cookies 🍪🚀

Os cookies são pequenos pedaços de dados armazenados no navegador do cliente. Aqui estão alguns pontos importantes sobre cookies:
- são excelentes para armazenar dados no cliente (navegador);
- não armazene dados sensíveis aqui, pois podem ser visualizados e manipulados.
- os cookies podem ser configurados para expirar quando o navegador é fechado (=> "Session Cookie") ou quando uma determinada idade/data de expiração é atingida ("Permanent Cookie").
- funcionam bem em conjunto com sessões.
---

## 1. **Configuração de Cookies em Express 🛠️**
- geralmente é utilizado o middleware cookie-parser;
- este middleware analisa os cabeçalhos de cookies e os torna acessíveis no objeto req.cookies;
~~~javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
~~~
---

## 2. **Definindo Cookies 🍪** 
- podemos definir cookies usando o método res.cookie();
- este método aceita o nome do cookie, seu valor e opções adicionais, como tempo de expiração e configurações de segurança;
~~~javascript
app.get('/definir-cookie', (req, res) => {
  // Define um cookie chamado 'exemplo' com o valor '123' e expira em 1 hora
  res.cookie('exemplo', '123', { maxAge: 3600000 });
  res.send('Cookie definido com sucesso!');
});
~~~
---

## 3. **Lendo Cookies 📖**
- os cookies definidos podem ser lidos a partir do objeto req.cookies;
- este objeto contém pares chave-valor dos cookies associados à requisição atual;
~~~javascript
app.get('/ler-cookie', (req, res) => {
  // Lê o valor do cookie 'exemplo'
  const valorDoCookie = req.cookies.exemplo;
  res.send(`Valor do Cookie: ${valorDoCookie}`);
});
~~~
---

## 4. **Expiração de Cookies ⌛**
- para configurar a expiração de um cookie, é utilizado a opção maxAge para especificar a duração em milissegundos;
~~~javascript
app.get('/cookie-expirado', (req, res) => {
  // Define um cookie que expirará após 1 minuto
  res.cookie('cookieExpirado', 'Este cookie vai expirar em breve', { maxAge: 60000 });
  res.send('Cookie com expiração definida');
});
~~~
---

## 5. **Excluindo Cookies ❌**
- para excluir um cookie, você pode definir seu valor como null e, opcionalmente, especificar opções de expiração;
~~~javascript
app.get('/deletar-cookie', (req, res) => {
  // Exclui o cookie 'exemplo'
  res.cookie('exemplo', null, { maxAge: 0 });
  res.send('Cookie excluído com sucesso!');
});
~~~
---

## 6. **Segurança 🔐**
- ao lidar com dados sensíveis, é essencial configurar cookies com as opções de segurança apropriadas, como o uso do atributo httpOnly para proteger contra ataques XSS;
~~~javascript
app.get('/cookie-seguro', (req, res) => {
  // Define um cookie seguro e acessível apenas via HTTP
  res.cookie('cookieSeguro', 'Este é um cookie seguro', { httpOnly: true, secure: true });
  res.send('Cookie seguro definido com sucesso!');
});
~~~
