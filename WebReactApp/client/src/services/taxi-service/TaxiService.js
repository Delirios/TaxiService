import { history } from "../utils/history";

export default class TaxiService {
  _apiBase = "http://34.105.135.203/gateway";
  //_apiBase = "http://localhost:55360/gateway";

  getResource = async (url) => {
    const responce = await fetch(`${this._apiBase}${url}`);
    if (!responce.ok) {
      throw new Error(`Could not fetch ${url} , received ${responce.status}`);
    }
    return responce;
  };
  getAuthorizeResource = async (url, config) => {
    console.log(config);
    const responce = await fetch(`${this._apiBase}${url}`, config);
    if (!responce.ok) {
      throw new Error(`Could not fetch ${url} , received ${responce.status}`);
    }
    return responce;
  };

  createMethod = async (url, config) => {
    console.log(config);
    const response = await fetch(`${this._apiBase}${url}`, config);
    console.log(response);

    return response;
  };
  createOrder = async (newOrder, user) => {
    const { destinationAddresses, originAddresses, distance, price } = newOrder;
    console.log(newOrder);
    const { userId, token } = user;
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
    const response = await this.createMethod(`/Order`, config);
    let result = "ERROR";
    if (response.ok) {
      result = "OK";
      return result;
    }
    return result;
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
    const response = await this.createMethod(`/Car/Add`, config);
    const result = await response.json();
    return result;
  };
  deleteCar = async (carId) => {
    const car = {
      carId,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    };
    console.log(config);
  };

  getNews = async () => {
    const response = await this.getResource(`/news`);
    const news = await response.json();
    return news;
  };
  getOrders = async (user) => {
    console.log(user);
    const { token, userId } = user;
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await this.getAuthorizeResource(
      `/order/${userId}`,
      config
    );

    const orders = await response.json();
    return orders;
  };

  getCategories = async () => {
    const response = await this.getResource(`/category`);

    const categories = await response.json();
    return categories;
  };
  getCars = async () => {
    const response = await this.getResource(`/car`);

    const cars = await response.json();
    return cars;
  };

  register = async (user) => {
    console.log(user);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const responce = await this.createMethod(`/login/register`, config);
    console.log(responce);
    if (responce.ok) {
      history.push("/login");
      return "OK";
    }
    return "Username already taken";
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
    const responce = await this.createMethod(`/login/login`, config);
    const user = await responce.json();
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
