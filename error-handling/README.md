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