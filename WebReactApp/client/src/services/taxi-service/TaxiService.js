export default class TaxiService {
  constructor(apiBase) {
    this._apiBase = apiBase;
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) { 
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };
}
