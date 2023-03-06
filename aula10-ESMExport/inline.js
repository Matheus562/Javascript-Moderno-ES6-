export function inline() {
  console.log("Export nomeado inline");
}

//Export default permite definir um export padrão sem que seja nescessario ser igual a function nesse caso a variavel recebe o nome "d"
//So podemos ter um export default por arquivo e pode ser um função anonima
export default function () {
  console.log("Export default inline");
}
