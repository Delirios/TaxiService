export default class TaxiService {

  getResource = async (apiBase,url) => {
    const res = await fetch(`${apiBase}${url}`);
    if (!res.ok) { 
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  getNews = async () => {
    const apiBase = "http://localhost:8082";
    const news = await this.getResource(apiBase,`/news`);
    return news;
  };

  getCategories = async () => {
    const apiBase = "http://localhost:8080";
    const categories = await this.getResource(apiBase,`/category`);
    return categories;
  };
}
