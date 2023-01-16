## Método .map
### `[].map`

O método ``map()` invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado, mas o que isso quer dizer

Isso significa que ele percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, ``map()`` retorna o novo array com todos os elementos “traduzidos”.


``const numbers = [1, 2, 3, 4, 5];``
``const dobro = numbers .map((numbers ) => numbers * 2);``
``console.log(dobro);``

No código acima declaramos uma variável numbers, que é um array contendo números inteiros. Em seguida declaramos a variável dobro que recebe o resultado da iteração do nosso map().

Nessa iteração pegaremos cada número contido no array numbers e vamos multiplicá-lo por dois. O``


## Arrow Function

As Arrow Functions são uma maneira mais simples ou menor de construir funções anônimas

~~~javascript
const funct1 = (param) => {}
~~~

### Por que ela se chama Arrow Function?

Porque a definimos utilizando uma arrow. É a mesma funcionalidade, mas com uma arrow, existe apenas uma particularidade que vou mostrar para você. Quando temos algo com um cenário acima, chamamos essa arrow function de statement, ou seja, ela tem instruções dentro do corpo dela, por isso ela tem a chave. Temos um outro tipo de arrow function que é a seguinte:

~~~javascript
const2 = function (valor) {
  return valor * 2
}
~~~

Se quisermos criar uma Arrow Function nesse sentido, precisamos passar também o valor, mas podemos fazer apenas isso:

~~~javascript
const funct2 = (valor) => valor * 2
~~~

Chamamos esse tipo de Expression Body, afinal o corpo dela é uma expressão. Perceba como fica bem mais simples. Vamos supor que eu tenha um vetor e eu quero fazer um map:

~~~javascript
const vetor = [1, 2, 3]

vetor.map((valor) => valor * 2)
~~~
