const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0); //reduce soma todos os elementos do array. accum = acumulador se iniciando com 0, num = numero atual
  return sum / numbers.length;
};
console.log(`Média Aritimética Simples: ${average(3, 6, 10, 9)}`); //Template literals

//Media Aritimetica Ponderada
const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  ); //Coalescencia nula
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

//Mediana. Elemento central
const median = (...numbers) => {
  //Clonando o array
  const orderedNumbers = [...numbers].sort((a, b) => a - b); // sort() organiza o array de forma crescente
  const middle = Math.floor(orderedNumbers.length / 2); //floor retorna o menor número inteiro dentre o número (orderedNumbers.length / 2).
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 9, 7, 3)}`);

//Moda. Numero que mais aparece
const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
