const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

//console.log(user.friends[0].phone.ddd)//Erro proposital, no há phone.ddd em friends
console.log(user?.friends[0]?.phone?.ddd); //Faz o encadeamente se existir a propriedade
console.log(user?.brothers?.length);

console.log(user.brothers?.[5].name); //Array e indice inexistente
