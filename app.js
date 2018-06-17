import preloadImages from './services/image_preloader.js';
import createLoadingPage from './components/loading_page/loading_page.js';
import startGame from './components/game_process/game_process.js';
import fabric from './node_modules/fabric/dist/fabric.js';

const imageSourceFile = require('./configs/image_sources.json');


const imageSources = imageSourceFile['imageSources'];

const loadingPage = createLoadingPage();

loadingPage.show(document.body);

setTimeout(() => {
  preloadImages(imageSources)
    .then(() => {
      loadingPage.remove();
      startGame();
  });
}, 3000);


  





