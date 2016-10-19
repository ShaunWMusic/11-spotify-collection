export default class View {
  constructor(model) {
    this.model = model;
    this.track = document.createElement('div');
    this.track.classList.add('panel-block');
    this.track.classList.add('track');
    this.track.innerHTML = `
      <img src="" class="track__img" alt="">
      <div class"content">
      <h2 class="track__artist"></h2>
      <h4 class="track__name"></h4>
      </div>
      <div class="spotify">
      <a class="track__link" href=""></a>
      </div>`;
  }
  render() {
    // changed from a simple function.
    this.track.querySelector('.track__artist').innerText = this.model.artist;
    this.track.querySelector('.track__name').innerText = this.model.name;
    this.track.querySelector('.track__img').src = this.model.images;
    this.track.querySelector('.track__link').href = this.model.url;
  }
}
//
