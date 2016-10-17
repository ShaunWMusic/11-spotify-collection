import './data';
import data from './model-module';

export default class view {
  constructor(model) {
    this.model = model;

    this.track = document.createElement('div');
    this.track.classList.add('panel-block, track');
    this.track.innerHTML = `
      <div class="panel-block track">


      </div>`;
  }
  render() {
// changed from a simple function.
    this.track.querySelector('.track__name').innerText = `${this.model.name}`;
    this.track.querySelector('.track__artist').innerText = `${this.model.artist}`;
    this.track.querySelector('.track__img').innerText = `${this.model.image}`;
  }
}
