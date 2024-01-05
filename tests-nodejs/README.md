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
1. **Suporte a Diversos Estilos de Assertividade 🔄**
Mocha permite que você use qualquer biblioteca de assertividade de sua escolha, como `assert, should, ou expect`;

2. **Estrutura de Teste Descritiva 📝** 
Mocha proporciona uma estrutura de teste descritiva e legível, utilizando funções como `describe, it, before, after, beforeEach, e afterEach`. Isso facilita a organização e compreensão dos testes.

3. **Testes Assíncronos ⏳**
Suporta testes assíncronos, essenciais no ambiente Node.js, através do uso de `done` para sinalizar a conclusão ou da utilização de Promises ou `async/await`.

4. **Reportagem de Testes 📊**
Gera relatórios detalhados de testes, incluindo estatísticas de execução e feedback visual.

--- 

#### Exemplo de código e teste 💻🧪✨
Este exemplo envolve uma função de middleware destinada a verificar a presença de um cabeçalho de autorização (Authorization) em uma requisição HTTP. 

**Código a ser testado 💻**
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
const authMiddleware = require('./caminho/do/middleware');  // Substitua pelo caminho real

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
