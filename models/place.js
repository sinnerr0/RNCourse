export class Place {
  constructor(title, imageUri, location, id) {
    if (!location || !location.address) {
      location = { address: "성남시", lat: "37.411327", lng: "127.128675" };
    }
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {
      lat: location.lat,
      lng: location.lng,
    };
    this.id = id;
  }
}
