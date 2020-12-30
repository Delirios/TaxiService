export default class TaxiService {
  //_apiBase = "http://34.89.120.234/gateway";
  _apiBase = "http://localhost:55360/gateway";

  //_apiBase = "http://localhost:5000";
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  createMethod = async (url, config) => {
    console.log(config);
    const response = await fetch(`${this._apiBase}${url}`, config);

    const result = await response.json();
    return result;
  };
  createOrder = async (newOrder, user) => {
    const { destinationAddresses, originAddresses, distance, price } = newOrder;
    console.log(newOrder);
    const { userId, token } = user;
    console.log(userId,token)
    const body = {
      userId,
      originAddresses,
      destinationAddresses,
      distance,
      price,
    };
    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const res = await this.createMethod(`/Order`, config);
    return res;
  };

  addCar = async (newCar) => {
    let form = new FormData();

    form.append("model", newCar.model);
    form.append("image", newCar.image);
    form.append("categoryId", newCar.category);
    const config = {
      method: "POST",
      body: form,
    };
    console.log(newCar);
    const res = await this.createMethod(`/Car/Add`, config);
    return res;
  };

  getNews = async () => {
    const news = await this.getResource(`/news`);
    return news;
  };

  getCategories = async () => {
    const categories = await this.getResource(`/category`);
    return categories;
  };
  getCars = async () => {
    const cars = await this.getResource(`/car`);
    return cars;
  };

  registerUser = async (user) => {
    const res = await this.registerUser(`/login/register`, user);
    return res;
  };

  login = async (values) => {
    const { username, password } = values;
    const body = { username, password };
    console.log(body);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const user = await this.createMethod(`/login/login`, config);
    if (user && user.token) {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
    return user;
  };
  logout() {
    localStorage.removeItem("user");
    console.log("logout");
  }
}
