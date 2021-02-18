import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = "http://localhost:8080/api/products";
  productUrl = "http://localhost:8080/api/product/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts() {
    console.warn("getProducts");
    // return products;
    return this.httpClient.get(this.productsUrl);
  }

  getProductById(id: string) {
    console.info("getProductById");
    console.info("id=" + id);
    // return products.find(product => product.id === id);
    // return this.httpClient.get(this.productUrl + id);
    return this.httpClient.get(this.productUrl + id);
  }
}
