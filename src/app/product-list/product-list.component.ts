import { Component } from '@angular/core';

// import { products } from '../products';
import { ProductService} from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products;
  products = this.productService.getProducts();

  constructor(private productService: ProductService) {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  // getProducts(): void {
  //   this.products = this.productService.getProducts();
  // }

  ngOnInit() {
    // this.getProducts();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/