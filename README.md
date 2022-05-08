## Explicação da solução 

Para resolver o problema, primeiro foi criado uma factory para armazenar objetos com os dados de cada hotel no formato
```js
hotel = {
  name,
    classification,
    prices: {
      Regular: { weekdays: weekdaysRegular, weekend: weekendRegular },
      Rewards: { weekdays: weekdaysRewards, weekend: weekendRewards },
    },
    getPrice(day, userType);
}
```

Após tratar os dados é extraído os dias e o tipo de cliente utilizando manipulação de strings com funções nativas do Javascript.

Depois é inicializado uma lista vazia e nela é armazenada todas as opções de preços encontrados para cada hotem em cada dia utilizando a funlçao getPrice presente no objeto dos hotéis e as datas utilizadas. Isso faz com que a solução possua complexidade igual a _n° de hotéis * número de datas_ que, nesse caso, será _O(3n) = O(n)_.
```js
// exemplo de all options com uma data fornecida (2Feb2009(mon))
allOptions = [
  { name: 'Lakewood', price: 110, classification: 3 },
  { name: 'Bridgewood', price: 160, classification: 4 },
  { name: 'Ridgewood', price: 220, classification: 5 },
]
```
Com todos os valores de todos os hotéis por data armazenados a solução irá utilizar o método sort presente nativamente nas listas do Javascript para ordenar os hotéis por preço, caso os preços sejam diferentes, e por classificação se os preços forem iguais.

Assim, o primeiro valor da lista sempre terá o objeto da opção com o menor preço requerido pelo problema. Restando apenas retornar o nome do hotel
```js
cheapestHotel = allOptions[0]
return cheapestHotel.name
```

## Testes disponíveis

Os testes diponíveis são:
- [X] Verificação de dados dos hotéis feitos pela factory (Nome, classificação e preços de cada um)
- [X] Verificação do retorno de menor preço em caso de datas com apenas final de semana com os dois tipos de clientes
- [X] Verificação do retorno de menor preço em caso de datas com apenas dias da semana com os dois tipos de clientes
- [X] Verificação do retorno de menor preço em caso de datas com datas mistas com os dois tipos de clientes
- [X] Verificação do retorno de menor preço em caso de apenas uma data com os dois tipos de clientes em final de semana e em dia da semana

## Como utilizar

Para instalar os módulos:

```
$ npm install
```

Para executar os testes:

```
$ npm test
```
