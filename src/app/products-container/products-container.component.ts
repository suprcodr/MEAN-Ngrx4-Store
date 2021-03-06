import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { Category } from '../models/category';
import { ProductService } from '../services/product.service'
import { CategoryService } from '../services/category.service'


@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  errorMessage: string;
  products: Product[];
  // categories: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
    ) { }


  ngOnInit() {
    this.getProducts();
    // this.getCategories();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        data => {
          this.products = data['products']
        console.log("DATA from server: ", data['products'])
        error => this.errorMessage = <any>error
        });
  }

  // getCategories():void{
  //   this.categoryService.getCategories()
  //   .subscribe(
  //     data => {
  //       this.categories = data['categories'];
  //     console.log("DATA from server: ", data['categories'])
  //     error => this.errorMessage = <any>error
  //     });
  // }
}
