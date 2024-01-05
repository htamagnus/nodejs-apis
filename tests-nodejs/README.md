## Projeto NodeJS Testes 🚀

Em Node.js, os testes são uma parte essencial do desenvolvimento para garantir que o código funciona como esperado. Existem dois tipos principais de testes: testes manuais e testes automatizados. Ambos têm seus propósitos específicos e são usados em conjunto para garantir a qualidade do software.

## Testes Manuais 🕹️
Testes manuais referem-se à execução de testes por desenvolvedores ou testadores sem o uso de ferramentas automatizadas. Os testadores interagem diretamente com o aplicativo para verificar se ele se comporta conforme o esperado.

**Quando Usar 🕹️** 

Testes manuais são úteis para validar rapidamente alterações específicas no código, explorar casos de uso complexos e verificar a experiência do usuário.

**Prós 👍** 
- Flexibilidade para explorar cenários não previstos.
- Pode ser mais eficiente para testes de interface do usuário.

**Contras 👎** 
- Propenso a erros humanos.
- Menos eficiente para repetição de testes em larga escala.
- Difícil de manter quando o código muda frequentemente.

---

## Testes Automatizados 🧪
Testes automatizados envolvem o uso de ferramentas e scripts para executar testes de forma programática, sem intervenção manual. Podem ser divididos em diferentes categorias, como testes unitários, testes de integração, testes de sistema, etc.

**Quando Usar 🕹️**

Testes automatizados são ideais para validar pequenas partes do código (testes unitários), garantir a integridade de sistemas complexos (testes de integração) e verificar se a aplicação atende aos requisitos especificados (testes de sistema).

**Prós 👍**
- Eficiência para execução repetida.
- Detecção precoce de regressões.
- Facilita a documentação dos requisitos através dos testes.

**Contras 👎**
- Requer investimento inicial na criação dos testes.
- Pode não cobrir todos os casos de uso.
- Pode não ser adequado para testes de interface do usuário complexos.

---

## Mocha ☕
Mocha é um dos frameworks de teste mais populares para JavaScript, sendo amplamente utilizado tanto no lado do cliente (front-end) quanto no servidor (Node.js). Ele fornece uma estrutura flexível e extensível para escrever testes, suportando diversos estilos de assertividade e integração com bibliotecas de mocking e stubbing .

### Características Principais 🧪
1. **Suporte a Diversos Estilos de Assertividade 🔄:**
   
Mocha permite que você use qualquer biblioteca de assertividade de sua escolha, como `assert, should, ou expect`;

2. **Estrutura de Teste Descritiva 📝:**
   
Mocha proporciona uma estrutura de teste descritiva e legível, utilizando funções como `describe, it, before, after, beforeEach, e afterEach`. Isso facilita a organização e compreensão dos testes.

3. **Testes Assíncronos ⏳:**
   
Suporta testes assíncronos, essenciais no ambiente Node.js, através do uso de `done` para sinalizar a conclusão ou da utilização de Promises ou `async/await`.

4. **Reportagem de Testes 📊:**
   
Gera relatórios detalhados de testes, incluindo estatísticas de execução e feedback visual.

--- 

### Exemplo de código e teste 💻🧪✨
Este exemplo envolve uma função de middleware destinada a verificar a presença de um cabeçalho de autorização (Authorization) em uma requisição HTTP. 

**Código a ser testado 💻:**
~~~javascript
module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  next();
};
~~~

O middleware exporta uma função que recebe os objetos `req`, `res` e `next` como parâmetros. Ele verifica se o cabeçalho de autorização está presente na requisição. Se não estiver, o middleware cria um novo objeto de erro indicando que a autenticação falhou e define o status HTTP para `401 (Unauthorized)`.

---

**Teste com o Mocha e Chai 🧪✨**

O teste usa Mocha e Chai para verificar se o middleware se comporta conforme esperado quando nenhum cabeçalho de autorização está presente na requisição. Ele cria um objeto `req` simulado com um método `get` que sempre retorna `null` para simular a ausência do cabeçalho de autorização. Em seguida, o teste chama o middleware e espera que ele lance um erro com a mensagem `'Not authenticated.'`.

~~~javascript
const { expect } = require('chai');
const authMiddleware = require('../middleware/is-auth');

it ('should throw an error if no authorization header is present', function() {
  const req = {
    get: function(headerName) {
      return null;
    }
  };
  expect(() => authMiddleware(req, {}, () => {})).to.throw('Not authenticated.');
});
~~~

---

- O objeto `req` simulado é configurado para retornar `null` quando o método `get` é chamado, imitando a ausência do cabeçalho de autorização;
- A função `authMiddleware` é chamada com o objeto `req` simulado. O teste espera que essa chamada lance um erro.
- A expressão `expect(...).to.throw('Not authenticated.')` verifica se a execução do middleware resulta em um erro com a mensagem específica `'Not authenticated.'`.

---

#### **Teste de verificação de token JWT**
Este teste é útil para verificar se o middleware está comportando corretamente ao decodificar o token e atribuir o `userId` ao objeto `req`.

~~~javascript
it("should yield a userId after decoding the token", function () {
  const req = {
    get: function (headerName) {
      return "Bearer xyz";
    },
  };
  sinon.stub(jwt, "verify");
  jwt.verify.returns({ userId: "abc" });
  authMiddleware(req, {}, () => {});
  expect(req).to.have.property("userId");
  expect(req).to.have.property("userId", "abc");
  expect(jwt.verify.called).to.be.true;
  jwt.verify.restore();
});
~~~

#### Explicação: 

Neste teste, um objeto req simulado é criado com um método get que sempre retorna a string 'Bearer xyz'. O teste utiliza Sinon para criar um stub da função verify do objeto jwt para simular a verificação do token. Após chamar o middleware (authMiddleware), são realizadas as expectativas para verificar se o userId foi corretamente atribuído ao objeto req e se a função verify foi chamada.

1. **Configuração do Objeto req:**

Um objeto req simulado é criado com um método get que simula a obtenção do cabeçalho de autorização. O método get sempre retorna a string 'Bearer xyz', simulando assim um token de autorização no formato correto.
~~~javascript
const req = {
  get: function (headerName) {
    return "Bearer xyz";
  },
};
~~~

---

2. **Stubbing da Função verify do jwt:**

Utilizando Sinon, a função verify do objeto jwt é substituída por um stub. O stub é configurado para retornar um objeto simulado contendo o userId "abc" quando chamado.
~~~javascript
sinon.stub(jwt, "verify");
jwt.verify.returns({ userId: "abc" });
~~~

---

3. **Chamada do Middleware:**
O middleware (authMiddleware) é chamado com o objeto req simulado. Isso aciona a execução do código no middleware, incluindo a verificação e decodificação do token.
~~~javascript
authMiddleware(req, {}, () => {});
~~~

---

4. **Expectativas (Assertions):**
- A primeira assertiva verifica se o objeto `req` tem uma propriedade chamada `"userId"`.
- A segunda assertiva verifica se o valor da propriedade "userId" é igual a "abc".
- A terceira assertiva verifica se a função verify do jwt foi chamada pelo menos uma vez.
~~~javascript
expect(req).to.have.property("userId");
expect(req).to.have.property("userId", "abc");
expect(jwt.verify.called).to.be.true;
~~~

---

5. **Restauração da Função verify Original:**
Após a execução do teste, a função `restore` é chamada para restaurar a função verify do jwt à sua implementação original. Isso é importante para evitar efeitos colaterais em outros testes.
~~~javascript
jwt.verify.restore();
~~~

---

## Testando funções assíncronas
Este teste específico verifica se o controlador de autenticação lida corretamente com uma falha ao acessar o banco de dados durante o processo de login.

~~~javascript
const expect = require("chai").expect;
const sinon = require("sinon");

const User = require("../models/user");

const AuthController = require("../controllers/auth");

describe("Auth Controller - Login", function () {
    it("should throw an error with code 500 if accessing the database fails", function (done) {
        sinon.stub(User, "findOne");
        User.findOne.throws();
        const req = {
            body: {
                email: "test@test.com",
                password: "tester"
            }
        }
        AuthController.login(req, {}, () => {}).then(result => {
            expect(result).to.be.an("error");
            expect(result).to.have.property("statusCode", 500);
            done();
        });
        User.findOne.restore();
    })
})
~~~

- Um objeto req simulado é criado para representar uma solicitação com informações de login.
- A função `findOne` do modelo `User` é substituída por um `stub`, e configurei o stub para lançar uma exceção quando chamado. Isso simula o comportamento de uma falha ao acessar o banco de dados.
- A função login do controlador é chamada com o objeto req simulado. É usado `.then` para esperar a resolução da Promessa retornada pela função login. Dentro do bloco `.then`, são feitas assertivas para verificar se o resultado é um erro com o código de `status 500`.

---

## Fazendo testes com um banco de dados ativo:
Este teste verifica se a função getUserStatus do controlador de autenticação responde corretamente ao fornecer o status de um usuário existente.
~~~javascript
 it("should send a response with a valid user status for an existing user", function (done) {
    mongoose
      .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((result) => {
        // Cria um novo objeto User e salva-o no banco de dados.
        const user = new User({
          email: "test@test.com",
          password: "tester",
          name: "Test",
          posts: [],
          _id: "5c0f66b979af55031b34728a",
        });
        return user.save();
      })
      .then(() => {
        // Configura o objeto req simulado com o userId de um usuário existente.
        const req = { userId: "5c0f66b979af55031b34728a" };
        // Configura o objeto res simulado que captura o status do usuário e o código de status HTTP.
        // Cria mock das funções status e json do objeto res
        const res = {
          statusCode: 500,
          userStatus: null,
          status: function (code) {
            this.statusCode = code;
            return this;
          },
          json: function (data) {
            this.userStatus = data.status;
          },
        };
        // Chama a função getUserStatus do controlador de autenticação com o objeto req e res simulados.
        AuthController.getUserStatus(req, res, () => {}).then(() => {
          // As assertivas verificam se o código de status HTTP é 200 e se o status do usuário é "I am new!".
          expect(res.statusCode).to.be.equal(200);
          expect(res.userStatus).to.be.equal("I am new!");
          // Após a execução do teste, exclui todos os documentos da coleção User.
          // Desconecta do banco de dados MongoDB.
          User.deleteMany({})
            .then(() => {
              return mongoose.disconnect();
            })
            .then(() => {
              done();
            });
        });
      });
  });
~~~

---
