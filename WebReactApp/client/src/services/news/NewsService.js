import TaxiService from "../taxi-service/TaxiService";

export default class NewsService {
  _apiBase = "http://localhost:8082";

  taxiService = new TaxiService(this._apiBase);

  async getNews() {
    const news = await this.taxiService.getResource(`/news`);
    return news;
  }
}
