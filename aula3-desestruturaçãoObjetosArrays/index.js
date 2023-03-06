const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

//Desestruturando objetos
//1ª forma
const name = person.name; //Acessa a chave name do objeto person
//2ª forma
const { job, parents } = person; //Acessa as chaves job e parents do objeto person

console.log(name, job, parents);

//Desestruturando arrays
const [father, mother] = parents;
console.log(father, mother);

//Utilizando function
/*1ª forma
function createUser(person) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name: person.name,
    job: person.job,
    parents: person.parents,
  };
}*/

//2ª forma
function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999); //Cria um numero aleatório entre 0 e 9999, floor (numeros inteiros)
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = createUser(person);
console.log(luke);
