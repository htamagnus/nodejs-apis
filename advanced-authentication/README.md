## Projeto de Autenticação Avançada em Node.js 🚀

O projeto de Autenticação Avançada em Node.js tem como foco a implementação de funcionalidades avançadas para garantir a segurança e a gestão eficiente de usuários. Abaixo estão os principais tópicos abordados durante o desenvolvimento:

---

## Crypto 🔐
- O módulo crypto no Node.js é uma biblioteca integrada que fornece funcionalidades criptográficas essenciais para o projeto;
- Nesse projeto, o crypto foi implementado da seguinte forma:
1. **Importação do módulo crypto:**
~~~javascript 
const crypto = require('crypto');
~~~

---

2. **Função postReset:**
~~~javascript 
exports.postReset = (req, res, next) => {}
~~~

---

3. **Geração de Token Aleatório:**
~~~javascript 
crypto.randomBytes(32, (err, buffer) => {...}:
// Gera 32 bytes aleatórios de forma assíncrona. O callback recebe um possível erro (err) e o buffer gerado.
~~~

---

4. **Conversão do Buffer para String Hexadecimal:**
- O buffer gerado é convertido para uma string hexadecimal, que será usada como token de redefinição de senha.
~~~javascript 
const token = buffer.toString('hex');
~~~

5. **Procura do Usuário pelo E-mail:**
~~~javascript
User.findOne({ email: req.body.email })
  .then(user => {}
// Procura um usuário no banco de dados com o e-mail fornecido no corpo da requisição.
~~~

---

6. **Manipulação do Usuário Encontrado:**
- Se não houver usuário encontrado, uma mensagem de erro é flashada e a resposta da requisição é redirecionada para a página de redefinição de senha.
~~~javascript
if (!user) {
  req.flash('error', 'No account with that email found.');
  return res.redirect('/reset');
}
~~~

---

7. **Atribuição do Token ao Usuário e Definição do Tempo de Expiração:**
- Se o usuário for encontrado, o token gerado é atribuído às propriedades resetToken e resetTokenExpiration do usuário, respectivamente.
~~~javascript 
user.resetToken = token;
user.resetTokenExpiration = Date.now() + 3600000; // Expira em 1 hora
return user.save();
~~~

---

8. **Envio de E-mail de Recuperação:**
- Após salvar as alterações no usuário, a resposta da requisição é redirecionada para a página principal, e é enviado um e-mail ao usuário com um link contendo o token para a redefinição de senha;
~~~javascript
res.redirect('/');
transporter.sendMail({
  to: req.body.email,
  from: 'shop@node-complete.com',
  subject: 'Password reset',
  html: `
    <p>You requested a password reset</p>
    <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
  `
});
~~~

---

*Essa implementação é uma abordagem comum para a funcionalidade de redefinição de senha, envolvendo a geração de tokens criptograficamente seguros, a associação desses tokens ao usuário e a notificação do usuário por e-mail para a redefinição de senha.*

---

## O que eu Aprendi 📚

#### Redefinição de Senha 🔄
- A redefinição de senha foi implementada de forma a evitar que os usuários redefinam contas de usuário aleatórias;
- Os tokens de redefinição são gerados utilizando a biblioteca crypto, garantindo que sejam aleatórios, inadivinháveis e únicos; 

---

#### Autorização 🔒
- A autorização foi tratada como uma parte vital em praticamente todos os aplicativos;
- Não é concedida a capacidade de realizar todas as ações a todos os usuários autenticados;
- A abordagem adotada visa restringir o acesso através da limitação das permissões dos usuários, proporcionando maior controle sobre as operações permitidas;

---
