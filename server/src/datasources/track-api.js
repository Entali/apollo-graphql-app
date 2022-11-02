const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracks() {
    return this.get('tracks');
  }

  getAuthor(id) {
    return this.get(`author/${id}`);
  }

  getTrack(id) {
    return this.get(`track/${id}`);
  }

  getTrackModule(id) {
    return this.get(`module/${id}`);
  }
}

module.exports = TrackAPI;