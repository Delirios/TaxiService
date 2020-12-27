export default class TaxiService {
  //_apiBase = "http://34.89.120.234/gateway";
  _apiBase = "http://localhost:55360/gateway";
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  createMethod = async (url, body, token) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(`${this._apiBase}${url}`, requestOptions);
    const result = await response.json();
    console.log(result);
    return result;
  };

  getNews = async () => {
    const news = await this.getResource(`/news`);
    return news;
  };

  getCategories = async () => {
    const categories = await this.getResource(`/category`);
    return categories;
  };

  createOrder = async (newOrder, user) => {
    const { destinationAddresses, originAddresses, distance, price } = newOrder;
    console.log(user);
    const { userId, token } = user;
    const body = {
      userId,
      originAddresses,
      destinationAddresses,
      distance,
      price,
    };
    const res = await this.createMethod(`/Order`, body, token);
    return res;
  };

  registerUser = async (user) => {
    const res = await this.registerUser(`/login/register`, user);
    return res;
  };

  login = async (values) => {
    const { username, password } = values;
    const body = { username, password };
    var response = await this.createMethod(`/login/login`, body).then((user) => {
      if (user && user.token) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
      }
    });
    var result = await response
    console.log(result)
    console.log(response)
  };
  logout() {
    localStorage.removeItem("user");
    console.log("logout");
  }

  handleResponse = (response) => {
    console.log(response);
    return response.text().then((text) => {
      if (!response.ok) {
        if (response.status === 401) {
          this.logout();
          this.window.location.reload(true);
        }

        const error = response.statusText;
        return Promise.reject(error);
      }
    });
  };
}
