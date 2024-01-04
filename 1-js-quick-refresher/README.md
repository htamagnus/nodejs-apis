# Projeto JS Quick Refresher 🚀

O projeto "JS Quick Refresher" tem como objetivo fornecer uma revisão rápida e prática de conceitos essenciais do JavaScript. Abaixo estão os principais tópicos abordados:

## Tópicos:
1. [Arrays](#1-arrays)
2. [Código Assíncrono e Promessas](#2-codigo-assincrono-e-promessas)
3. [Propriedades e Métodos de Objetos](#3-propriedades-e-metodos-de-objetos)
4. [Const e Let](#4-const-e-let)

---

## 1. Arrays 📚:

A primeira parte do projeto explora o conceito de arrays em JavaScript. Isso inclui a criação, manipulação e iteração por meio de arrays, que são estruturas de dados fundamentais para armazenar coleções de elementos.

~~~javascript
const hobbies = ['Sports', 'Cooking'];

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);
~~~

- Uso do `map`: Utiliza a função map para criar um novo array transformando cada elemento do array original. No caso, adiciona a string 'Hobby: ' antes de cada hobby. O resultado impresso é `['Hobby: Sports', 'Hobby: Cooking']`

---

## 2. Código Assíncrono e Promessas ⏳:

A segunda parte aborda o código assíncrono em JavaScript e a utilização de promessas. Esses conceitos são cruciais para lidar com operações demoradas, como requisições de rede, e garantir um fluxo eficiente no programa.

~~~javascript
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
~~~

- `fetchData` é uma função que retorna uma Promise;
- A Promise é resolvida ("Done!") após um atraso de 1500 milissegundos (1.5 segundos);
- Após um atraso de 2000 milissegundos (2 segundos), a função dentro do setTimeout é executada;
- Uma segunda chamada a fetchData é feita, e novamente, quando a Promise é resolvida, o texto é impresso;
- "Hello!" e "Hi!" são impressos imediatamente, pois estão fora do setTimeout.

---

## 3. Propriedades e Métodos de Objetos 🧔:

A terceira etapa foca nas propriedades e métodos disponíveis em objetos JavaScript. Isso inclui entender como acessar e manipular dados em objetos por meio de suas propriedades e a utilização de métodos para realizar ações específicas.

~~~javascript
const person = {
    name: 'Hta',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
~~~

---

## 4. Const e Let 🅰️🔤:

A última parte revisita a declaração de variáveis em JavaScript, destacando as diferenças entre `const` e `let`. Esses são importantes conceitos para compreender a escopo e a mutabilidade de variáveis no JavaScript moderno.

#### Const:
- A variável declarada com const é uma constante, ou seja, seu valor não pode ser reatribuído após a primeira atribuição.
- É uma boa prática usar const para declarar variáveis que não terão seu valor reatribuído.

#### Let:
- A variável declarada com let permite a reatribuição de valores.
- Ela tem escopo de bloco, o que significa que é válida apenas dentro do bloco em que foi declarada.

Em resumo, use const quando o valor da variável não precisar ser reatribuído, e use let quando a reatribuição for necessária.

---

Estes são os principais tópicos abordados no projeto "JS Quick Refresher", proporcionando uma revisão rápida e eficaz de conceitos-chave do JavaScript.
