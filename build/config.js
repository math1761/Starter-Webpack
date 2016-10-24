module.exports = {
  entry: {
    app: ['./app/sass/main.scss', './app/js/main.js']
  },
  port: 3003,
  html: true,
  assets_url: './app/assets/',  // Urls dans le fichier final
  assets_path: './dist/', // ou build ?
  refresh: ['./app/index.html'] // Permet de forcer le rafraichissement du navigateur lors de la modification de ces fichiers
};
