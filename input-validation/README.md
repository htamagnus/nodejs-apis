## Projeto Node.js de Validação Segura de Entrada de Usuários 🚀

Esse projeto tem como objetivo principal garantir a integridade e segurança dos dados provenientes dos usuários. Abaixo estão os principais tópicos abordados durante o desenvolvimento:

---

1. **Validação de Dados com Express Validator 🛡️**
- Utiliza o check do express-validator/check para validar o campo de email. Se houver erros de validação, eles são capturados pelo validationResult;
~~~javascript 
const { check } = require('express-validator/check');
router.post('/signup', check('email').isEmail(), authController.postSignup);
~~~

---

2. **Verificação de Erros de Validação ❌**
- O código verifica se há erros de validação utilizando validationResult. Se houver, retorna uma resposta com o status 422 (Unprocessable Entity) e renderiza a página de signup com mensagens de erro;
~~~javascript 
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(422).render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: errors.array()
  });
}
~~~

---

3. **Express Validator Middleware 🚀**
- `check("email")`: Define a validação para o campo de email.
- `.isEmail()`: Verifica se o valor do campo é um email válido.
- `.withMessage("Please enter a valid email")`: Define uma mensagem personalizada caso a validação .isEmail() falhe.
- `.custom((value, { req }) => {...})`: Permite a definição de validações personalizadas. Neste caso, verifica se o valor do email é "test@test.com" e lança um erro se for.
~~~javascript 
check("email")
  .isEmail()
  .withMessage("Please enter a valid email")
  .custom((value, { req }) => {
    if (value === "test@test.com") {
      throw new Error("This email address is forbidden.");
    }
    return true;
  }),
~~~

---

4. **Validação Customizada 🔍**
A função .custom() é utilizada para realizar validações personalizadas. No exemplo, ela verifica se o email é "test@test.com" e lança um erro caso seja. Essa validação personalizada é uma maneira de aplicar regras específicas de negócios ou restrições personalizadas aos dados do usuário;
~~~javascript 
.custom((value, { req }) => {
  if (value === "test@test.com") {
    throw new Error("This email address is forbidden.");
  }
  return true;
}),
~~~

---

5. **Validação para senhas 🔐**
- `.isLength({ min: 5 })`: Verifica se o valor do campo tem pelo menos 5 caracteres.
- `.isAlphanumeric()`: Verifica se o valor do campo contém apenas caracteres alfanuméricos.
~~~javascript 
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
~~~

---

6. **Verificação de igualdade de campo ⚖️**
- Adiciona uma validação para garantir que o campo "confirmPassword" seja igual ao campo "password".
- Essa abordagem ajuda a evitar erros de digitação e contribui para a segurança e integridade dos dados do usuário;
~~~javascript 
body("confirmPassword").custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error("Password have to match!");
  }
  return true;
})
~~~

---

7. **Limpeza de dados 🧹**
- Sanitização do Campo 'email' na Rota de Login: `.normalizeEmail()`: Normaliza o valor do campo 'email', removendo espaços e caracteres especiais. Isso é útil para garantir que o email esteja em um formato consistente;
- Sanitização do Campo 'password' na Rota de Login: `.trim()`: Remove espaços no início e no final do valor do campo 'password'. Isso é útil para garantir que espaços extras não causem problemas durante o processo de autenticação;
- Sanitização do Campo 'password' e 'confirmPassword' nas Validacões de Senha: Ambos os campos 'password' e 'confirmPassword' são submetidos à sanitização `.trim()`, removendo espaços no início e no final;
- Validação Personalizada para 'confirmPassword': A validação personalizada para 'confirmPassword' continua a verificar se a confirmação da senha corresponde à senha original após a sanitização;
~~~javascript 
router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(), // Sanitização: Normaliza o email (remove espaços e caracteres especiais)
    body('password', 'Password has to be valid.')
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim() // Sanitização: Remove espaços no início e no final do valor do campo
  ],
  authController.postLogin
);

body('password', 'Please enter a password with only numbers and text and at least 5 characters.')
  .isLength({ min: 5 })
  .isAlphanumeric()
  .trim(), // Sanitização: Remove espaços no início e no final do valor do campo
body('confirmPassword')
  .trim() // Sanitização: Remove espaços no início e no final do valor do campo
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords have to match!');
    }
    return true;
  })
~~~

---