import axios from "axios";
import { Product } from "../store/interfaces";

let apiMethods: ApiService;

export function getApiMethods() {
  if (!apiMethods) {
    apiMethods = initializeAPiService();
  }
  return apiMethods;
}

export function initializeAPiService() {
  return new ApiService();
}

export default class ApiService {
  products: Product[];

  constructor() {
    this.products = [];
  }

  async getProducts() {
    axios.get("http://localhost:3001/products").then((response) => {
      this.products = response.data;
      console.log(this.products);
      return response.data;
    });
  }
}
