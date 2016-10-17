import 'whatwg-fetch';
import tracks from './data';
import model from './spotify-tracker/model-module';
import view './spotify-tracker/view-module';


tracks.forEach((data) => {
  const c = new tracks(data);

  const view = new view(c);
// this runs the render in characterView
  view.render();


  document.body.appendChild(view.track);

  console.log(c);
});
