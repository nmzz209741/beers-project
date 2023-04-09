/* eslint-disable */

import axios from "axios";

class BeerApi {
  static async getAllBeers(page, limit=10) {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        page,
        per_page: limit
      }
    });
    return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from API: ${error}`);
    }
  }
}

export default BeerApi;
