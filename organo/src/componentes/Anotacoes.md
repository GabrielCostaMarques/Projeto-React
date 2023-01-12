## Método .map
### `[].map`

O método ``map()` invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado, mas o que isso quer dizer

Isso significa que ele percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, ``map()`` retorna o novo array com todos os elementos “traduzidos”.


``const numbers = [1, 2, 3, 4, 5];``
``const dobro = numbers .map((numbers ) => numbers * 2);``
``console.log(dobro);``

No código acima declaramos uma variável numbers, que é um array contendo números inteiros. Em seguida declaramos a variável dobro que recebe o resultado da iteração do nosso map().

Nessa iteração pegaremos cada número contido no array numbers e vamos multiplicá-lo por dois. O