export const name = "Isaac";

export function label(attributes) {
  const element = document.createElement("label");
  Object.assign(element, attributes); //assign é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.
  return element;
}

export function input(attributes) {
  const element = document.createElement("input");
  Object.assign(element, attributes);
  return element;
}

export function br() {
  const element = document.createElement("br");
  return element;
}
