//Função normal
function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`);

//Função anonima
const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma anônima: ${anonymousSum(2, 2)}`);

//Arrow function
const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

//Função de uma linha (não precisa do return)
const subtract = (a, b) => a - b;

console.log(`Subtração: ${subtract(5, 2)}`);

//Com apenas um parametro, não precisa usar ()
const double = (n) => `O dobro de ${n} é ${n * 2}`;

const number = 21;
console.log(double(number));

//Higher order function
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
