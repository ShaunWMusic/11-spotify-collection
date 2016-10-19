import 'whatwg-fetch';
import data from './data.json';
import Model from './spotify-tracker/model';
import View from './spotify-tracker/view';

// console.log(data);
data.tracks.items.forEach((item) => {
  // Using keyword "new" duplicates class Model's constructor
  // and the constructor for model is just organizing data
  const model = new Model(item);
  // Using keyword "new" duplicates class called View and that
  // duplicates a constructor that is creating innerHTML to put the data in.
  const view = new View(model);


  const results = document.querySelector('.results');
  results.appendChild(view.track);
  view.render();
});
