import 'whatwg-fetch';
import data from './data';
import Model from './spotify-tracker/model';
import View from './spotify-tracker/view';

console.log(data['tracks']);

const results = document.querySelector('.results');
data['tracks'].items.forEach((track) => {
  const model = new Model(track);
  const view = new View(model);

// view.appendChild()
});
