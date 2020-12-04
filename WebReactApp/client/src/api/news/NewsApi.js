export default class NewsApi {
  _apiBase = "http://localhost:8082";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  }

  async getNews() {
    const res = await this.getResource(`/news`);
    return res.results;
  }
}
