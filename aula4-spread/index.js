const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]); //console.log(P, r, o, n, t, e, r, a)

//Copiando e modificando o array(referencia)
const townsCopy = towns;

townsCopy.pop(); //Remove o ultimo elemento do array
townsCopy.pop();
townsCopy.push("Juno"); //Adciona o elemento no array

console.log({ towns, townsCopy });

//Clonando o array
const townsClone = [...towns];

townsClone.push("Aldebaran");
console.log({ towns, townsCopy, townsClone });

//Agindo sobre objetos
const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "test";

console.log({ townsObj, townsObjClone });
