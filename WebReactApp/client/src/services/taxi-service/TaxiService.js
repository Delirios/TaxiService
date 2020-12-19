export default class TaxiService {
  getResource = async (apiBase, url) => {
    const res = await fetch(`${apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  createMethod = async (apiBase, url, newOrder) => {
    const response = await fetch(`${apiBase}${url}`, {
      method: "POST", 
      body: JSON.stringify(newOrder), 
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  createOrder = async (newOrder) => {
    const apiBase = "http://localhost:8084/gateway";
    const res = await this.createMethod(apiBase, `/Order`, newOrder);
    return res;
  };

  getNews = async () => {
    const apiBase = "http://localhost:8084/gateway";
    const news = await this.getResource(apiBase, `/news`);
    return news;
  };

  getCategories = async () => {
    const apiBase = "http://localhost:8084/gateway";
    const categories = await this.getResource(apiBase, `/category`);
    return categories;
  };
}
