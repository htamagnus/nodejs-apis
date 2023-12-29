# Projeto NodeJS com Mongoose 
Mongoose é um biblioteca de Modelagem de Dados de Objeto (ou ODM, do inglês: Object Data Modeling) para MongoDB e Node.js. Ele gerencia o relacionamento entre dados, fornece a validação de esquemas e é usado como tradutor entre objetos no código e a representação desses objetos no MongoDB.

O MongoDB é um banco de dados de documentos NoSQL que não possui esquemas. Isso significa que ele guarda documentos JSON e que a estrutura deles pode variar, já que não há a estrutura rígida igual a dos bancos SQL. Uma das vantagens em usar NoSQL é que acelera o desenvolvimento de aplicações e reduz a complexidade das implementações.

---
## Tópicos: 
1. [Conexão com o banco](#1º-conexão-com-o-banco) 🌐
2. [Definir um esquema](#2º-definir-um-esquema) 📋
3. [Exportar um modelo](#3º-exportar-um-modelo) 🚚
4. [Buscando um produto](#4º-buscando-um-produto) 🔎
5. [Atualizando um produto](#5º-atualizando-um-produto) ✨
6. [Deletando um produto](#6º-deletando-um-produto) 🗑️
7. [Relacionando Schemas](#7º-relacionando-schemas) ↔️
---

## 1º: Conexão com o banco
~~~javascript
const mongoose = require("mongoose"); // O primeiro passo é importar o módulo mongoose, ele fornece uma camada de abstração para simplificar a interação com o MongoDB.

mongoose
  .connect(
    "mongodb+srv://hta:agatha@cluster0.r2eb6bu.mongodb.net/shop?retryWrites=true&w=majority"
  ) // Esta linha estabelece uma conexão com o banco de dados MongoDB
  .then((result) => {
    app.listen(3006);
  }) //  Este bloco é executado quando a conexão com o banco de dados é estabelecida com sucesso. A função app.listen(3006) inicia o servidor da aplicação na porta 3007. 
  .catch((err) => {
    console.log(err);
  }); //  Se ocorrer algum erro durante a conexão com o banco de dados, este bloco é executado. O erro é capturado e registrado no console 
~~~

---

## 2º: Definir um esquema:
O esquema define as propriedades do documento através de um objeto, onde o nome da chave corresponde ao nome da propriedade na coleção.
Os seguintes tipos de esquemas são permitidos:
- Array
- Boolean (ou booleano, em português)
- Buffer
- Date (ou formato de data, em português)
- Mixed (um tipo genérico/flexível de dados)
- Number (ou numérico, em português)
- ObjectId
- String
~~~javascript
const mongoose = require('mongoose'); // Importa o módulo Mongoose, que é necessário para criar modelos e interagir com bancos de dados MongoDB

const Schema = mongoose.Schema; // Armazenamos a classe schema do mongoose na variável 'Schema'

const productSchema = new Schema({ //Criamos um novo esquema para representar a estrutura dos documentos que serão armazenados em uma coleção do MOngoDB. O objeto passado para o construtor do Schema define os campos e suas propriedades.
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
~~~
Portanto, o productSchema descreve a estrutura dos documentos que representam produtos. Cada documento precisa ter um título, preço e descrição, e esses campos devem conter os tipos de dados especificados. 
Agora, o productSchema pode ser usado para criar modelos de dados que se encaixam nesse esquema. Esses modelos são usados para interagir com a coleção no banco de dados MongoDB e realizar operações como criar, ler, atualizar e excluir documentos.

---

## 3º: Exportar um modelo: 
~~~javascript
module.exports = mongoose.model('Product', productSchema);
~~~
Para exportar um modelo no mongoose, você define um nome para ele e indica o nome da entidade.
Essa linha de código combina o esquema productSchema com o nome 'Product' para criar um modelo que representa documentos com a estrutura definida no esquema. Esse modelo pode ser usado para executar operações no banco de dados, como criar, ler, atualizar e excluir documentos na coleção 'Product'. Após essa exportação, o modelo 'Product' estará disponível para uso em outros arquivos e partes do seu aplicativo Node.js.

---

## 4º: Buscando um produto:
~~~javascript
exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
~~~
O método find() do Mongoose é uma das operações mais comuns e fundamentais para recuperar documentos de um banco de dados MongoDB. Ele é usado para consultar documentos em uma coleção com base em critérios de pesquisa e retorna um ou mais documentos que correspondem a esses critérios. Essa chamada procura todos os documentos no banco de dados MongoDB associados ao modelo Product.

---

## 5º: Atualizando um produto: 
~~~javascript
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId; //  Obtém o ID do produto a ser editado do corpo da solicitação
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId) // Esta linha faz uma consulta ao banco de dados para localizar o produto com o ID especificado (prodId) usando o método findById() do modelo Product. Isso é feito para recuperar o produto existente que será atualizado.
    .then((product) => { // Se o produto for encontrado com sucesso, a função dentro deste bloco .then() será executada. Ela recebe o produto encontrado como argumento (representado pela variável product).
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save(); // Após a atualização das propriedades do produto, a função .save() é chamada para salvar essas alterações no banco de dados.
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err)); // Se houver algum erro durante o processo de atualização ou salvamento do produto, o erro será capturado neste bloco .catch() e registrado no console.
};
~~~
Esse controlador é responsável por atualizar as informações de um produto no banco de dados com base nos dados enviados por um formulário de edição. Ele primeiro localiza o produto pelo ID, atualiza suas propriedades e, em seguida, salva as alterações no banco de dados. Se bem-sucedido, a resposta é redirecionada para a página de administração de produtos; caso contrário, qualquer erro é registrado no console.

---

## 6º: Deletando um produto: 
~~~javascript
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId; //Obtém o ID do produto que deve ser excluído a partir do corpo da solicitação POST.
  Product.findByIdAndRemove(prodId) // Esta linha realiza a exclusão do produto com o ID fornecido (prodId) no banco de dados MongoDB. Ela utiliza o método findByIdAndRemove do modelo Mongoose Product para localizar e remover o documento correspondente no banco de dados com base no ID.
    .then(() => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/admin/products");
    }) // Se a exclusão do produto for bem-sucedida, o código dentro deste bloco .then() é executado. Neste caso, ele imprime "DESTROYED PRODUCT" no console e, em seguida, redireciona o usuário para a página "/admin/products".
    .catch((err) => console.log(err)); //Se ocorrer algum erro durante o processo de exclusão do produto, o erro é capturado neste bloco .catch() e é registrado no console.
};
~~~
Esta função controladora é usada para excluir um produto do banco de dados com base no ID do produto fornecido na solicitação POST. Se a exclusão for bem-sucedida, uma mensagem é registrada no console e o usuário é redirecionado para a página de administração de produtos. Se houver algum erro durante o processo de exclusão, o erro é registrado no console.

---

## 7º Relacionando Schemas: 
O atributo ref é usado em esquemas do Mongoose para estabelecer uma referência entre diferentes coleções em um banco de dados MongoDB. Ele é particularmente útil quando você deseja criar relacionamentos ou associações entre documentos em coleções diferentes.

~~~javascript
const Schema = mongoose.Schema;

const productSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User", // estabelece uma referencia ao uma diferente coleção chamada User
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
~~~
- O productSchema inclui um campo chamado userId, que é um tipo Schema.Types.ObjectId e faz referência à coleção 'User'. Isso significa que o valor desse campo será o ID de um documento na coleção 'User'.

~~~javascript
const Schema = mongoose.Schema;

const userSchema = new Schema({
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});
module.exports = mongoose.model("User", userSchema);
~~~
- Cada item do carrinho é representado por um objeto que inclui o productId (que é uma referência à coleção 'Product') e a quantity (a quantidade do produto no carrinho).
- Isso permite que um usuário tenha produtos em seu carrinho e que esses produtos sejam referências a documentos da coleção 'Product'. A relação entre os usuários e os produtos é estabelecida por meio do campo productId.

---
