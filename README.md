## Explicação da solução

Para resolver o problema, primeiro foi criado uma factory para armazenar objetos com os dados de cada hotel que foram amazenados em um
objeto com chave sendo o nome do hotel

```js
HOTELS = {
  Lakewood: hotelFactory(LakewoodData),
  Bridgewood: hotelFactory(BridgewoodData),
  Ridgewood: hotelFactory(RidgewoodData),
};
```

Após tratar os dados é extraído os dias e o tipo de cliente utilizando manipulação de strings com funções nativas do Javascript.

Depois é inicializado um array (hotelsResults) contendo informações de preço total calculado em cada dia requerido, nome e cllassificação do hotel

```js
// exemplo de hotelsResults inicializado com uma os hoteis fornecidos
hotelsResults = [
  { name: "Lakewood", totalPrice: 0, classification: 3 },
  { name: "Bridgewood", totalPrice: 0, classification: 4 },
  { name: "Ridgewood", totalPrice: 0, classification: 5 },
];
```

É então utilizado as datas para adicionar ao valor total do hotel gerando o resultado final

```js
// exemplo de hotelsResults com os valores adicionados (input inicial = Rewards: 26Dec2009(sat), 27Dec2009(sun))
hotelsResults = [
  { name: "Lakewood", totalPrice: 160, classification: 3 },
  { name: "Bridgewood", totalPrice: 100, classification: 4 },
  { name: "Ridgewood", totalPrice: 80, classification: 5 },
];
```

Por fim, o a lista de resultados é ordenada para priorizar o menor preço e caso necessário a melhor classificação.
Assim, o hotem mais barato sempre será o primeiro da lista.

```js
// hotelsResults ordenado
hotelsResults = [
  { name: "Ridgewood", totalPrice: 80, classification: 5 },
  { name: "Bridgewood", totalPrice: 100, classification: 4 },
  { name: "Lakewood", totalPrice: 160, classification: 3 },
];
cheapestHotel = allOptions[0];
return cheapestHotel.name;
```

## Testes disponíveis

Os testes diponíveis são:

- [x] Verificação de dados dos hotéis feitos pela factory (Nome, classificação e preços de cada um)
- [x] Verificação do retorno de menor preço em caso de datas com apenas final de semana com os dois tipos de clientes
- [x] Verificação do retorno de menor preço em caso de datas com apenas dias da semana com os dois tipos de clientes
- [x] Verificação do retorno de menor preço em caso de datas com datas mistas com os dois tipos de clientes
- [x] Verificação do retorno de menor preço em caso de apenas uma data com os dois tipos de clientes em final de semana e em dia da semana
- [x] Verificação de empate de preços

## Como utilizar

Para instalar os módulos:

```
$ npm install
```

Para executar os testes:

```
$ npm test
```
