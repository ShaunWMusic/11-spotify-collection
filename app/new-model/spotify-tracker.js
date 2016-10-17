export default function () {
  class Character {
    constructor(data) {
      this.artist = data.artist;
      this.name = data.name;
      this.image = data.image;
      this.url = data.url;
    }

    isTrustworthy() {
      return this.universe === 1 && this.profession !== 'Bioterrorist';
    }
}
}
