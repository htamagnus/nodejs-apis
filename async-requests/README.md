## Projeto Node.js de Tratamento de Requisições Assíncronas 🚀
Este projeto em Node.js tem como foco o tratamento eficiente de requisições assíncronas em aplicações. Aqui estão os principais tópicos abordados durante o desenvolvimento:

---

### Como realizar operações assíncronas ⏳
- A função utiliza o método Fetch para enviar uma solicitação DELETE para o servidor, incluindo o ID do produto e o token CSRF nos cabeçalhos. Em caso de sucesso, ela remove o elemento do produto da DOM;
- Essa função é um exemplo de como realizar operações assíncronas (como solicitações HTTP) de forma eficiente, tratando tanto o sucesso quanto as condições de erro;
~~~javascript
const deleteProduct = (btn) => {
    // Obtem o ID do produto e o token CSRF do elemento HTML pai do botão
    const prodId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

    // Encontra o elemento do produto mais próximo (ancestral mais próximo do tipo 'article')
    const productElement = btn.closest('article');

    // Enviar uma solicitação DELETE ao servidor
    fetch('/admin/product/' + prodId, {
        method: 'DELETE',
        headers: {
            'csrf-token': csrf
        }
    }).then(result => {
        // Analisa a resposta JSON
        return result.json();
    }).then(data => {
        // Manipula os dados da resposta (pode incluir mensagens de sucesso, etc.)
        console.log(data);
        
        // Remove o elemento do produto da DOM
        productElement.parentNode.removeChild(productElement);
    }).catch(err => {
        // Lida com erros durante a solicitação
        console.log(err);
    })
}
~~~

### Mudança na manipulação da resposta do servidor 🔄
A diferença entre o código "antes" e "depois" está relacionada à mudança na manipulação da resposta do servidor e à utilização de um código de status HTTP mais adequado. Aqui estão os pontos-chave de cada versão:

#### Antes 🕰️
~~~javascript
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  // ... (código restante)
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
~~~
  - Quando a req vem do body, o ID do produto era esperado no corpo da solicitação. Isso é comum em solicitações POST, especialmente quando os dados do formulário são enviados no corpo da solicitação.

---

#### Depois 🔄
~~~javascript
exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // ... (código restante)
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.status(200).json({ message: 'Success!' });
  })
  .catch(err => {
    res.status(500).json({ message: 'Deleting product failed.' });
  });
};
~~~

- Quando a req vem do parâmetros da URL, o Express extrai automaticamente os valores dos parâmetros da URL e os disponibiliza em req.params;

- A diferença entre req.body e req.params está relacionada à forma como os dados são enviados na solicitação HTTP;

- A escolha entre req.body e req.params depende da forma como os dados são enviados na solicitação. No contexto de uma solicitação de exclusão (DELETE), é comum passar o ID do recurso a ser excluído como parte da URL (req.params), pois a operação de exclusão está relacionada diretamente ao recurso identificado pelo ID na URL;

---