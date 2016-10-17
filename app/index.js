import 'whatwg-fetch';
import tracks from './data';
import model from './spotify-tracker/model-module';
import view from './spotify-tracker/view-module';


data['tracks'].itemsforEach((track) => {
  const c = new model(track);
});
