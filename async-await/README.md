## Projeto NodeJS Async/await 🚀

Em Node.js, async/await é uma abordagem síncrona para lidar com operações assíncronas. Ela é construída sobre as Promises, fornecendo uma maneira mais legível e concisa de trabalhar com código assíncrono.

A transformação do código para utilizar async/await traz uma abordagem mais concisa e legível para lidar com operações assíncronas em comparação com a versão anterior que utilizava Promises encadeadas.

---

## Código antes usando .then() e catch() 🔄
~~~javascript
exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(posts => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        posts: posts,
        totalItems: totalItems
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
~~~

---

## Código depois utilizando async await ⌛
~~~javascript
exports.getPosts = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  try {
    const totalItems = await Post.find().countDocuments();
    const posts = await Post.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: 'Fetched posts successfully.',
      posts: posts,
      totalItems: totalItems
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
~~~

### Principais Alterações 🚧
- **Utilização de await:** A contagem de documentos `(totalItems)` e a busca de posts agora utilizam await, tornando o código mais linear e fácil de entender.
- **Bloco try/catch:** Em vez de encadear `.then()` e usar `.catch()` para tratar erros, agora é utilizado um bloco `try/catch`, o que simplifica a lógica de tratamento de erros.

---