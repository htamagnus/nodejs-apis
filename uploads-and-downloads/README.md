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