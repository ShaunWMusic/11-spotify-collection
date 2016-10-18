export default class Model {
  constructor(data) {
    this.artists = data.tracks.items[0].artists[0].name;
    this.name = data.tracks.items[0].album.name;
    this.image = data.tracks.items[0].album.images[0].url;
    this.url = data.tracks.items[0].album.external_urls.spotify;
  }
}
