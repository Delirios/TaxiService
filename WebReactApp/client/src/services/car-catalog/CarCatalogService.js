import TaxiService from "../taxi-service/TaxiService";

export default class CarCatalogService {
  _apiBase = "http://localhost:8080";

  taxiService = new TaxiService(this._apiBase);

  getCategories = async () => {
    const categories = await this.taxiService.getResource(`/category`);
    return categories;
  };
}
