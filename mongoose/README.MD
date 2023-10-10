Mongoose é um biblioteca de Modelagem de Dados de Objeto (ou ODM, do inglês: Object Data Modeling) para MongoDB e Node.js. Ele gerencia o relacionamento entre dados, fornece a validação de esquemas e é usado como tradutor entre objetos no código e a representação desses objetos no MongoDB.

O MongoDB é um banco de dados de documentos NoSQL que não possui esquemas. Isso significa que ele guarda documentos JSON e que a estrutura deles pode variar, já que não há a estrutura rígida igual a dos bancos SQL. Uma das vantagens em usar NoSQL é que acelera o desenvolvimento de aplicações e reduz a complexidade das implementações.

---

# 1º: Conexão com o banco

---

# 2º: Definir um esquema:
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
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    },
    imageUrl: {
        type: String,
        required: true
    },
});
~~~

---

# 3º: Exportar um modelo: 
~~~javascript
module.exports = mongoose.model('Product', productSchema);
~~~