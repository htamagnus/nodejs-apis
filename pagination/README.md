## Projeto Node.js de Paginação 🚀
Este projeto Node.js é dedicado à implementação eficiente e amigável de paginação para lidar com grandes conjuntos de dados. Abaixo, destacamos os principais aspectos e funcionalidades deste projeto:

### Paginação Robusta 📖🔄
Implementação sólida e eficiente de paginação para facilitar a navegação em grandes volumes de dados.

---

### Controle de Navegação 🎯🚀
Permita que os usuários naveguem facilmente entre as diferentes páginas do conjunto de dados, proporcionando uma experiência de usuário amigável.

---

## Lógica de paginação com MongoDB e Mongoose 📊💡
Essa implementação fornece uma experiência de navegação por páginas para os usuários, permitindo que eles percorram grandes conjuntos de dados:
~~~javascript
const page = +req.query.page || 1; 
let totalItems;

Product.find().countDocuments().then(numProducts => {
  totalItems = numProducts;

  return Product.find()
    .skip((page - 1) * ITEMS_PER_PAGE) // PAGINATION: pular os primeiros n itens na página atual
    .limit(ITEMS_PER_PAGE); // PAGINATION: limitar o número de itens por página
})
.then(products => {
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    totalProducts: totalItems,
    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
  });
});
~~~
- `Product.find().countDocuments().then(numProducts => { totalItems = numProducts;`: Utiliza countDocuments() para contar o número total de documentos na coleção Product. O resultado é atribuído à variável totalItems;
- `return Product.find().skip((page - 1) * ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE);`: Retorna uma consulta à coleção Product com a lógica de paginação incluída. A consulta pula os primeiros N itens com base na página atual e limita o número de itens retornados por página;
- `totalProducts`: O número total de itens na coleção;
- `hasNextPage`: Indica se há uma próxima página com base na lógica de paginação;
- `hasPreviousPage`: Indica se há uma página anterior com base na lógica de paginação;
- `nextPage`: Número da próxima página;
- `previousPage`: Número da página anterior;
- `lastPage`: Número total de páginas necessárias para exibir todos os itens;
---

## Lógica de paginação com EJS 🖼️🔄
Essa implementação cria uma barra de navegação de página dinâmica, permitindo que os usuários naveguem entre as páginas de um conjunto paginado de itens. 
~~javascript
<section class="pagination">
    <% if (currentPage !== 1 && previousPage !== 1) { %>
        <a href="?page=1">1</a>
    <% } %>
    <% if (hasPreviousPage) { %>
        <a href="?page=<%= previousPage %>"><%= previousPage %></a>
    <% } %>
    <a href="?page=<%= currentPage %>" class="active"><%= currentPage %></a>
    <% if (hasNextPage) { %>
        <a href="?page=<%= nextPage %>"><%= nextPage %></a>
    <% } %>
    <% if (lastPage !== currentPage && nextPage !== lastPage) { %>
        <a href="?page=<%= lastPage %>"><%= lastPage %></a>
    <% } %>
</section>
~~~
- `<% if (currentPage !== 1 && previousPage !== 1) { %>` : Verifica se a página atual não é a primeira e se a página anterior não é a primeira;
- `<% if (lastPage !== currentPage && nextPage !== lastPage) { %>` : Verifica se a última página não é igual à página atual e se a próxima página não é a última página;

---