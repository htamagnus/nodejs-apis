## Projeto NodeJS com Typescript 🚀

## Tipos de dados 🎲
1. String;
2. Number;
3. Boolean;
4. **Union Types:**
~~~typescript
let chavePix: string | number;
chavePix = "agathamagnusg@hotmail.com"
chavePix = "996864775"
~~~

5. **Array:**
~~~typescript
const filmesCategorias: string[] = ["Comédia", "Drama", "Romance"];

const filmesAnos: Array<number | string> = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++){
	filmesAnos.push(ano);
}
~~~

6. **Tuple:**
~~~typescript
let superset: [string, number, string];

superset = ["Typescript", 2011, "Anders"];
~~~

7. **Object:**
~~~typescript
const configuracaoServidor: object = {
	servidor: "Microsoft Azure",
	ip: "127.0.0.1",
	senha: "123456"
}

configuracaoServidor = {
	servidor: "Google Cloud"
}
~~~

8. **Enum:** 
- enumerar algum dado específico que queremos criar ou categorizar;
- enumerar as permissões;
~~~typescript
enum Permission {
	ADMIN, 
	USER,
	READONLY
}
~~~

9. **Null and Undefined:**
- null: ausência de valor, ex: uso no DOM, querySelector;
- undefined: não especificou qual o valor da variável;
- geralmente usado com union types;
~~~typescript
const elemento: HTMLHeadingElement | null = document.querySelector("h2");

let db: string | null = "mysql, 127.0.0.1, password";

db = null;

let minhaVariavel: string | undefined;
minhaVariavel = undefined;

//ex:
if (new Date().getDate() === 15) {
	minhaVariavel = "Hoje é o dia 15";
}
~~~

---

## Generics 🔄
- generics permitem criar estruturas que serão adaptáveis a vários tipos de dados;
- esse conceito ajuda a reaproveitar melhor o código e tornar flexível para diversas situações;
- para definir um generic, basta informar um tipo genérico usando os sinais de menor e maior <> ;
~~~typescript
interface Iprocessamento<TipoInterface> {
	valor: TipoInterface;
	
	realizarProcessamento(arg: TipoInterface): TipoInterface;
}

const string: IProcessamento = {
	valor: "hcode",
	realizarProcessamento(argumento: string): string {
			return argumento.toUpperCase();
	}
}
~~~