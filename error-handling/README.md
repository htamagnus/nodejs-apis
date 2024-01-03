# Projeto NodeJS Handling Errors 🚧
Projeto em NodeJS a fim de tratar erros. Entender e categorizar os diferentes tipos de erros ajuda a lidar eficientemente com problemas que possam surgir durante a execução do sistema. Principais tópicos abordados durante o desenvolvimento:

---

# Tipos de erros:

### 1. Erros Técnicos/De Rede 🌐
Esses são erros relacionados a questões técnicas ou de rede que podem ocorrer durante a operação do sistema. Por exemplo, se o servidor MongoDB estiver inativo devido a um problema técnico ou se houver uma falha de conexão de rede; 
- Servidor MongoDB cai;
- Exibe página de erro para o usuário;

---

### 2. Erros "Esperados" ⚠️
Esses erros são previsíveis e geralmente ocorrem devido a situações específicas, como a incapacidade de ler um arquivo ou uma falha na execução de uma operação no banco de dados. Eles são chamados de "esperados" porque o sistema pode antecipar esses cenários.
- Exemplo: Não é possível ler o arquivo, falha na operação do banco de dados;
- Informar o usuário, possivelmente tentar novamente;

---

### 3. Bugs/Erros Lógicos" 🐞
Esses são erros relacionados a falhas no código-fonte, onde ocorre um comportamento inesperado. Por exemplo, utilizar um objeto de usuário que não foi corretamente inicializado ou não existe.
- Exemplo: Objeto do usuário utilizado quando não existe;
- Corrigir durante o desenvolvimento;

---

# Lidando com erros 🚧

## 1. Quando o erro é lançado 💥
**Código Síncrono (try catch) 🔄**
- Quando você está lidando com código síncrono, o uso do bloco try catch é uma prática comum. Isso permite que você envolva seções de código onde erros podem ocorrer no bloco try e capture esses erros no bloco catch. Isso proporciona controle sobre como os erros são tratados, permitindo a execução de ações específicas quando uma exceção é detectada;

**Código Assíncrono (then() catch()) ⏳**
- Em operações assíncronas, como Promises, é comum utilizar then() e catch() para lidar com sucessos e erros, respectivamente. O bloco catch é executado quando ocorre um erro durante a execução da Promise;

**Lidar Diretamente com o Erro 🚨**
- Em algumas situações, você pode optar por lidar diretamente com o erro no ponto em que ele ocorre, sem utilizar construções como try catch ou catch();

**Usar a Função de Tratamento de Erros do Express 🌐**
- No contexto do Express.js, você pode usar a função de tratamento de erros integrada para centralizar o tratamento de erros em sua aplicação. Isso é feito utilizando um middleware especial que captura erros, permitindo que você forneça respostas adequadas ao usuário;

---

## 2. Quando nenhum erro é lançado ✅
**Validação de Valores e Lançamento de Erro 🔍**
- Se nenhum erro é lançado naturalmente no código, é possível realizar validações explicitamente e, se necessário, lançar um erro manualmente usando a palavra-chave throw. Isso é útil quando certas condições precisam ser atendidas antes de prosseguir;

---

## 3. Possíveis Resultados de Cenários 📊
**Página de Erro (ex: Página 500) 🚩🔴** 
- Se um erro não for tratado e não for capturado, é comum exibir uma página de erro padrão, como uma página 500 (Internal Server Error), para informar ao usuário que algo inesperado aconteceu.

**Página/Resposta Planejada com Informações de Erro ou Redirecionamento 📝🔄**
- Em certos casos, é preferível planejar respostas específicas para diferentes tipos de erros. Isso pode incluir exibir uma página com informações detalhadas sobre o erro ou redirecionar o usuário para uma página específica, dependendo do contexto e da natureza do erro.

---

*Trabalhar com erros envolve uma abordagem equilibrada entre capturar erros de forma adequada para manter a estabilidade do aplicativo e fornecer respostas informativas aos usuários quando algo não ocorre conforme o esperado. A escolha entre diferentes métodos de tratamento de erros dependerá das necessidades específicas de cada situação e da arquitetura da aplicação.*

---

## Lançando erros no código 🚨
#### 1. Tratamento com Throw new Error 🚧
- **Tratamento de Usuário Não Encontrado:** é adicionada uma verificação para o caso em que o usuário não é encontrado no banco de dados. Se user for falsy (no caso de não existir), uma mensagem informativa é exibida no console e o middleware avança para o próximo middleware usando `next()`.

- **Tratamento de Erros Gerais:** No bloco catch, ao invés de apenas imprimir o erro no console `(console.log(err))`, agora é lançada uma exceção `(throw new Error(err))`. Isso transforma o erro em uma exceção, o que pode ser útil para rastreamento e identificação mais eficientes de erros não tratados.

- **Chamada do Próximo Middleware:** Independentemente de o usuário existir ou não, o código utiliza `next()` para passar para o próximo middleware. Isso garante que o fluxo de execução continue mesmo em casos de erros ou quando o usuário não é encontrado.
~~~javascript
User.findById(req.session.user._id)
  .then(user => {
    if (!user) {
      console.log("user doesn't exist");
      return next();
    }
    req.user = user;
    next();
  })
  .catch(err => {
    throw new Error(err);
  });
~~~

---

#### 2. Retornando páginas de erros 🚩📄
- Este trecho de código exporta uma função que renderiza a página de erro 500;
~~~javascript
exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
};
~~~
- Dentro de um bloco catch, quando ocorre um erro, o código redireciona o usuário para a rota `'/500'`
~~~javascript
.catch(err => {
  res.redirect('/500');
});
~~~

*Essencialmente, quando ocorre um erro durante a execução do código, ele redireciona o usuário para a página de erro 500, proporcionando uma experiência mais amigável em caso de falhas no servidor.*

---