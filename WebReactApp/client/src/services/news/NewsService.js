export default class NewsService {
  _apiBase = "http://localhost:8082";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  }

  async getNews() {
    const news = await this.getResource(`/news`);
    return news;
  }
}
