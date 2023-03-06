function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0); //Soma todos os numeros dentro do array
}

console.log(sum(1, 1));
console.log(sum(9, 30, 90, 4));
console.log(sum(32, 38, 90, 25, 42));
