import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { ConfigService } from './config.service';
// import { products } from './products';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = "/products";
  productUrl = "/product";

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { 
    console.info("Init product service");
  }

  getProducts() {
    console.warn("getProducts");
    // return products;
    return this.httpClient.get<Product[]>(this.configService.getApiServer() + this.productsUrl);
    // return this.httpClient.get("http://localhost:8080/api/products");
    // console.warn("getProduct complete");
  }

  getProductById(id: string) {
    console.info("getProductById");
    console.info("id=" + id);
    // return products.find(product => product.id === id);
    // return this.httpClient.get(this.productUrl + id);
    return this.httpClient.get<Product>(this.configService.getApiServer() + this.productUrl + "/" + id);
  }
}
