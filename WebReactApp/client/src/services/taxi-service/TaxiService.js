export default class TaxiService {
  _apiBase = "http://localhost:8085/gateway";
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  createMethod = async (url, newOrder) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    };
    const response = await fetch(`${this._apiBase}${url}`, requestOptions);
    return response.json();
  };

  getNews = async () => {
    const news = await this.getResource(`/news`);
    return news;
  };

  getCategories = async () => {
    const categories = await this.getResource(`/category`);
    return categories;
  };

  createOrder = async (newOrder) => {
    const res = await this.createMethod(`/Order`, newOrder);
    return res;
  };

  registerUser = async (user) => {
    const res = await this.registerUser(`/login/register`, user);
    return res;
  };

  login = async (username, password) => {
    var res = await this.createMethod(`/login/login`, {
      username,
      password,
    }).then((user) => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes

        //localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        
      
      }
      return res;
    });
  };
  logout() {
    // remove user from local storage to log user out
    //localStorage.removeItem('user');
    console.log("logout");
  }
}
