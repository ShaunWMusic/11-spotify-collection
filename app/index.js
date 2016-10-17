import 'whatwg-fetch';
import data from './data';
import model from './spotify-tracker/model';
import view from './spotify-tracker/view';

console.log(data['tracks']);

data['tracks'].items.forEach((track) => {
  const c = new model(track);
  const t = new view(model);
});
