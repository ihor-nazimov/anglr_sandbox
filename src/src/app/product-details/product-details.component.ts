import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CONFIG } from '../config';

// import { products } from '../products';
import { Product } from '../product';
import { CartService } from '../cart.service'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productIdFromRoute: string = this.route.snapshot.paramMap.get('productId');
  // product = this.productService.getProductById(this.productIdFromRoute);
  product;
  
  imageUriServer = "http://localhost:8080/";

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService, 
    private productService: ProductService

    ) {
      // const routeParams = this.route.snapshot.paramMap;
      // const productIdFromRoute = routeParams.get('productId');
  
      console.info("productIdFromRoute=" + this.productIdFromRoute);
      console.info(this.product);
      // this.getProductById(this.productIdFromRoute);  
      // console.info(this.product);
    }

  ngOnInit() {
    // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = routeParams.get('productId');

    this.productService.getProductById(this.productIdFromRoute)
      .subscribe(data => {
        this.product = data;
        this.product.imageUri = CONFIG.imageUriServer + this.product.imageUri;
      });
    console.info("onInit");
    
    // Find the product that correspond with the id provided in route.
    // this.product = products.find(product => product.id === productIdFromRoute);
    // this.getProductById(productIdFromRoute);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("The product has been added to the cart");
  }

  // getProductById(id: string): void {
  //   this.product = this.productService.getProductById(id);
  // }

}