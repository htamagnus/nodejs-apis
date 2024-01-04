## Projeto Node.js de File Uploads & Downloads 🚀

Este projeto Node.js é dedicado ao tratamento eficiente de uploads e downloads de arquivos, proporcionando uma solução robusta e escalável para lidar com operações relacionadas a arquivos. Abaixo estão os principais tópicos abordados neste projeto:

---

### Upload de Arquivos 📤
- Oferece uma interface intuitiva para usuários fazerem upload de arquivos.
- Implementa validações de tipos e tamanhos de arquivos para garantir a integridade dos dados.
- Utiliza técnicas modernas para otimizar o processo de upload.

---

### Download de Arquivos 📥
- Permite que os usuários baixem arquivos de maneira segura e eficiente.
- Implementa controle de acesso para garantir que apenas usuários autorizados possam realizar downloads.
- Fornece opções para download individual ou em lote.

### Gerenciamento de Arquivos 🗄️
- Organiza os arquivos em categorias ou pastas para facilitar a navegação.
- Implementa um sistema de busca para localização rápida de arquivos específicos.
- Fornece opções de exclusão e renomeação para uma administração eficaz.

---

### Upload de Arquivos com o middleware Multer 📤
- O Multer é uma biblioteca para o Node.js que facilita o tratamento de uploads de arquivos em aplicações web construídas com o framework Express. Essa biblioteca simplifica o processo de receber, armazenar e manipular arquivos enviados por meio de formulários da web.
~~~javascript
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    // cb(null, new Date().toISOString() + '-' + file.originalname);
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

app.use(multer({ storage: fileStorage }).single('image'));
~~~
**Configuração de Armazenamento:**
- `multer.diskStorage` é utilizado para configurar o armazenamento em disco. Ele permite definir a pasta de destino (destination) e o nome do arquivo (filename);
- `destination:` Define o diretório para onde os arquivos serão armazenados;
- `filename:` Define o nome do arquivo;

**Middleware Multer:**
- `app.use(multer({ storage: fileStorage }).single('image')):` Configura o middleware Multer para processar uploads de arquivos;
- `storage:` Informa ao Multer para usar a configuração definida em fileStorage;
- `single('image'):` Indica que estamos lidando com o upload de um único arquivo e o campo do formulário é chamado 'image';

**HTML:**
Já no HTML, para permitir o upload de arquivos, é utilizado o `enctype="multipart/form-data"`

---

### Filtrando arquivos por mimetype 📎
Apenas arquivos PNG, JPG e JPEG são permitidos. Se um arquivo com um tipo MIME diferente for enviado, o Multer rejeitará automaticamente o upload;
~~~javascript
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
~~~
- A função verifica se o tipo MIME do arquivo está entre os tipos de imagem permitidos (image/png, image/jpg, image/jpeg);
- Se o tipo MIME for permitido, o callback é chamado com cb(null, true) (indicando que o arquivo é aceito);
- Se o tipo MIME não estiver na lista permitida, o callback é chamado com cb(null, false) (indicando que o arquivo é rejeitado);
- `fileFilter: fileFilter`: Adiciona a função de filtro ao middleware Multer. Isso garante que apenas os arquivos que passam pelo filtro serão aceitos.

---

### Fazendo downloading de arquivos
~~~javascript
const fs = require('fs');
const path = require('path');

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; // Obtém o parâmetro de URL orderId da requisição
  const invoiceName = 'invoice-' + orderId + '.pdf'; // Constrói o nome do arquivo PDF da fatura com base no orderId.
  const invoicePath = path.join('data', 'invoices', invoiceName);

  fs.readFile(invoicePath, (err, data) => {
    if (err) {
      return next(err);
    }

    res.setHeader('Content-Type', 'application/pdf'); // Define o tipo de conteúdo da resposta como 'application/pdf', indicando que o arquivo sendo enviado é um PDF.
    res.setHeader('Content-Disposition', 'inline; filename="' + invoiceName + '"');
    res.send(data); // Define o cabeçalho 'Content-Disposition' para indicar como o navegador deve exibir o arquivo. Neste caso, 'inline' significa que o navegador deve tentar exibir o PDF diretamente, e o nome do arquivo é especificado.
  });
}
~~~
