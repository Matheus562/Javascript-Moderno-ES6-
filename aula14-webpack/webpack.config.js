//configutando wabpack

/*const path = require("path");

//usando commonJS
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"), //caminho completo onde deseja salvar o arquivo
    filename: "bundle.min.js", //mudar nome arquivo
  },
};
*/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Loaders

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        //expressoes regulares. Testa todos arquivos procurando aqueles que terminam com .css. Escolhe esses arquivos para utilizar o loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        //qual loader usar
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
