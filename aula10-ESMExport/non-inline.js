function group() {
  console.log("Exportnomeado não-inline (agrupado)");
}

function exportDefault() {
  console.log("Export default não-inline");
}

//export pode ser escrito em outra linha
export { group };
export default exportDefault;
