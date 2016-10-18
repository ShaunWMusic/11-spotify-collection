import 'whatwg-fetch';
import data from './data.json';
import Model from './spotify-tracker/model';
import View from './spotify-tracker/view';


const results = document.querySelector('.results');
data.tracks.items.forEach((track) => {
  const model = new Model(data);
  const view = new View(model);
  // console.log(view);
  // view.render();
});
