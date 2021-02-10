import axios from "axios";
import config from "../assets/config/config.json";

const API_URL = `${config.host}:${config.port}${config.api}`;

export class ItemsRequestService {
  /**
   * Get a data of products in a list
   * @param {object} params query params object
   * @returns {promise}
   */
  getProductList(params) {
    const query = params ? this.getParams(params) : "";
    const obs = params
      ? axios.get(`http://${this.API_URL}${config.productsEndpoint}=${query}`)
      : axios.get(`http://${this.API_URL}${config.productsEndpoint}`);

    return obs;
  }

  /**
   * Get a single product data by ID
   * @param {string} itemId
   * @returns {promise}
   */
  getProduct(itemId) {
    return axios.get(
      `http://${this.API_URL}${config.productEndpoint}/${itemId}`
    );
  }

  /**
   * Get a list of product suggestions by query
   * @param {string} query
   * @returns {promise}
   */
  getSuggestedQueries(query) {
    return axios.get(`${config.suggestedQueriesEndPoint}${query}`);
  }
}
